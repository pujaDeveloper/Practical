
import React, { Component } from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import { Message } from '../../utils/message';
import PhotoDetailText from '../../components/PhotoDetailText';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class PhotoDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mPhotoDetails: this.props.selectedPhotoDetails.selectedPhotoDetails
        }
    }

    componentDidMount() {
        console.log("selectedPhoto", this.state.mPhotoDetails);
    }

    render() {
        const { mPhotoDetails } = this.state;

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.subContainer}>
                    <Image style={styles.photo}
                        source={{ uri: mPhotoDetails.url }} />
                    <View style={styles.textContainer}>
                        <PhotoDetailText label={Message.albumId} value={mPhotoDetails.albumId} ></PhotoDetailText>
                        <PhotoDetailText label={Message.Id} value={mPhotoDetails.id} ></PhotoDetailText>
                        <PhotoDetailText label={Message.photoTitle} value={mPhotoDetails.title} ></PhotoDetailText>
                    </View>
                </View>
            </SafeAreaView>

        );
    }

}

//redux
function mapStateToProps(state) {
    return {
        selectedPhotoDetails: state.selectedPhotoDetails
    };
}
export default connect(mapStateToProps)(PhotoDetails);
