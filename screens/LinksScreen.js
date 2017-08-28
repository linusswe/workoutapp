import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <ScrollView style={styles.container}>

        <Text>PULL</Text>
        <Text>
</Text><Text>Deadlifts 1x5+/Barbell rows 4x5, 1x5+ (alternate, so if you did deadlifts on Monday, you would do rows on Thursday, and so on)
</Text><Text>3x8-12 Pulldowns OR Pullups OR chinups
</Text><Text>3x8-12 seated cable rows OR chest supported rows
</Text><Text>5x15-20 face pulls
</Text><Text>4x8-12 hammer curls
</Text><Text>4x8-12 dumbbell curls</Text>
<Text>
</Text><Text>PUSH</Text><Text>
</Text><Text>4x5, 1x5+ bench press/4x5, 1x5+ overhead press (alternate in the same fashion as the rows and deadlifts)
</Text><Text>3x8-12 overhead press/3x8-12 bench press (do the opposite movement: if you bench pressed first, overhead press here)
</Text><Text>3x8-12 incline dumbbell press
</Text><Text>3x8-12 triceps pushdowns SS 3x15-20 lateral raises
</Text><Text>3x8-12 overhead triceps extensions SS 3x15-20 lateral raises</Text>
<Text>
</Text><Text>LEGS</Text><Text>
</Text><Text>2x5, 1x5+ squat
</Text><Text>3x8-12 Romanian Deadlift
</Text><Text>3x8-12 leg press
</Text><Text>3x8-12 leg curls
</Text><Text>5x8-12 calf raises</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
