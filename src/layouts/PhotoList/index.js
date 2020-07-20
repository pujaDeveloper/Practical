
import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import Progress from '../../components/Progress';
import API from '../../API';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setPhotoDetails } from "../../redux/actions/index";

class PhotoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      photosData: [],
      isLoading: false,
      isRefreshing: false,
      pageNo: -1,
      pageSize: 12
    }
  }

  async componentDidMount() {
    this.LoadData()
  }

  //make component if reuse
  renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => this.onItemClick(item)} >
      <Image style={styles.itemThumbnail}
        source={{ uri: item.thumbnailUrl }} />
      <Text style={styles.itemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  render() {
    const { isLoading, isRefreshing, photosData } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <FlatList
            data={photosData}
            renderItem={this.renderItem}
            keyExtractor={item => item.id.toString()}
            refreshing={isRefreshing}
            onRefresh={this.handleRefresh}
            onEndReached={this.LoadData}
            onEndThreshold={0.5}
            onEndReachedThreshold={0.5}
          />
        </View>
        {isLoading && <Progress />}
      </View>

    );
  }

  LoadData = async (isLoading = true) => {
    if (this.state.isLoading) {
      return;
    }
    await this.setState({
      isLoading: isLoading,
      pageNo: this.state.pageNo + 1
    })
    let start = this.state.pageNo * (this.state.pageSize + 1)
    let response = await API.getPhotos(start, this.state.pageSize)
    this.setState({
      isLoading: false,
      isRefreshing: false,
      photosData: this.state.pageNo == 1 ? response.data : [...this.state.photosData, ...response.data],
    })
  }

  handleRefresh = () => {
    this.setState({
      isRefreshing: true,
    }, () => {
      this.LoadData(false);
    });
  };

  onItemClick = (item) => {
    this.props.setPhotoDetails(item)
    this.props.navigation.navigate("PhotoDetails")
  }

}

//redux
function mapStateToProps(state) {
  return {
    selectedPhotoDetails: state.selectedPhotoDetails
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ setPhotoDetails: setPhotoDetails }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(PhotoList);
