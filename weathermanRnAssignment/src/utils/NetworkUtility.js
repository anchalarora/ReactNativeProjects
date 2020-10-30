import NetInfo from '@react-native-community/netinfo';

export default class NetworkUtility {

    static isNetWorkAvailable = async  () => {
        const response = await NetInfo.fetch();
        console.log("IsnetConnected",response.isConnected)
        return response.isConnected;
    }
}

