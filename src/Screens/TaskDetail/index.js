import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Header from '../../Components/Header';
import styles from './styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ImageSourcePNG} from '../../assets';
import moment from 'moment';
import {renderPriorityStatusColor} from '../../helpers';

const TaskDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const item = route.params;

  const handleGoBack = () => {
    navigation.goBack();
  };
  const _renderHeaderLeft = () => (
    <TouchableOpacity onPress={handleGoBack}>
      <Image style={styles.arrowLeft} source={ImageSourcePNG.ArrowLeft} />
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <Header headerLeft={_renderHeaderLeft} title="Task Details" />
      <View style={styles.taskBody}>
        <View
          style={[
            styles.priorityView,
            {backgroundColor: renderPriorityStatusColor(item.priority)},
          ]}>
          <Text style={styles.textPriority}>{item.priority.toUpperCase()}</Text>
        </View>
        <Text style={styles.title}>{item.taskName}</Text>
        <Text style={styles.dateTime}>
          {item.date} || {moment(item.time).format('h:mm A')}
        </Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </SafeAreaView>
  );
};

export default TaskDetail;
