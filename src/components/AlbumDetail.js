import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const { 
        headerContentStyle, 
        imageStyle, 
        imageContainerStyle, 
        titleTextStyle, 
        albumImageStyle 
    } = styles;
    const { title, artist, thumbnail_image, image, url } = album;
    return (
    <Card>
        <CardItem>
            <View style={imageContainerStyle}>
                <Image
                    style={imageStyle}
                    source={{ uri: thumbnail_image }}
                />
            </View>
            <View style={headerContentStyle}>
                <Text style={titleTextStyle}>{title}</Text>
                <Text>{artist}</Text>
            </View>
        </CardItem>
        <CardItem>
            <Image
                style={albumImageStyle}
                source={{ uri: image }}
            />
        </CardItem>
        <CardItem>
            <Button onPress={() => Linking.openURL(url)}>
                Buy Now
            </Button>
        </CardItem>
    </Card>
    );
};


const styles = {
    headerContentStyle: {
        justifyContent: 'space-around',
        flexDirection: 'column'
    },
    titleTextStyle: {
        fontSize: 20
    },
    imageContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 50,
        width: 50
    },
    albumImageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;
