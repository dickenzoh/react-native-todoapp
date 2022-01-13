import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, TouchableOpacity, FlatList} from 'react-native';
import SnackBar from './src/components/SnackBar';

const COLORS = {primary: '#1f145c', white: '#fff'};

const App = () => {
  const [goals, setGoals] = React.useState([
    {id: 1, goal: 'Goal 1', invest: '150,000', finished: false},
    {id: 2, goal: 'Goal 1', invest: '170,000', finished: false},
    {id: 3, goal: 'Goal 1', invest: '160,000', finished: false},
    {id: 4, goal: 'Buy 1000 shares by January', invest: '140,000', finished: true},
    {id: 5, goal: 'Invest in Bonds starting January', invest: '130,000', finished: true},
    {id: 6, goal: 'Invest in MMF January', invest: '120,000', finished: true},
  ]);

  const ListItem = ({goal}) => {
    return (
      <View style= {styles.listitem}>
        <View style={{ flex: 2}}>
          <Text
          style={{ 
            fontWeight: 'bold',
            fontSize: 15,
            color: COLORS.primary,
          }}>
            {goal?.goal}
            KES {goal.invest}
          </Text>
        </View>
        {!goal?.finished &&(
          <TouchableOpacity        
          style={[styles.finishGoal] }
          onPress={onFinishClicked(goal?.id)}>
          <Text
          style={{ 
            fontWeight: 'bold',
            fontSize: 15,
            color: COLORS.primary,
            textAlign: 'right'
          }}>
            Finish Goal
          </Text>
          </TouchableOpacity>
        )}
        
          <TouchableOpacity style={[styles.finishGoal] }>
          <Text
          style={{ 
            fontWeight: 'bold',
            fontSize: 15,
            color: COLORS.primary,
            textAlign: 'right'

          }}>
            Finished
          </Text>
          </TouchableOpacity>
        
         <Text
        style={{ 
          fontWeight: 'bold',
          fontSize: 15,
          color: COLORS.primary,
         }}>
           
         </Text>
         <TouchableOpacity>  
          <Text style={{ fontWeight: "italic", fontSize: 10, color: COLORS.white }}>Finish Goal</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return(
    <SafeAreaView style={{ flex:1, backgroundColor: COLORS.white }}>
      <View style={styles.header} >
        <Text style={{fontSize: 20, color: COLORS.white, textAlign: "left", paddingTop: 40, paddingHorizontal:40}}>
          Evening dickens          
        </Text>
        <Text style={{flex: 2, fontSize: 8, paddingHorizontal:40}}>Here is the latest</Text>
        <Text style={{ fontSize: 20, color: 'green', paddingHorizontal:40}}> KES 420,000 </Text>
        <Text style={{flex: 4, fontSize: 8, paddingHorizontal:40}}> Total funds </Text>        
      </View>
      <View>
      <Text style={{fontSize: 20, color: 'black',}}> Your Goals </Text>
      </View>
      <FlatList data={goals} renderItem={({item}) =><ListItem goal={item} />}/>
      <View style = {styles.footer}>
        <View style={styles.button}>
        <TouchableOpacity onPress={showSnackbar}>  
          <Text style={{ fontWeight: "bold", fontSize: 17, color: COLORS.white }}>Show Snackbar</Text>
        </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  ); 
};

const onFinishClicked = (goalid) => {
  const updatedGoals = goals.map(item => {
    if(item.id == goalid){
      return{...item, finished: true};
    }
    return item;
  });
  setGoals(updatedGoals);
}

const showSnackbar = () => {
    return(
      <View>
        <SnackBar message={'Hello from here'} />
      </View>
    );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#303846',
    height: 200,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  listitem: {
    padding: 10,
    backgroundColor: COLORS.white,
    flexDirection: 'column',
    elevation: 8,
    borderRadius: 7,
    marginVertical: 5,
  },
  finishGoal: {
    height: 25,
    width: 80,
    backgroundColor: '#01a699',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    borderRadius: 3,
  },
  button: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    flex: 1,
    marginVertical: 50,
    width:100,
    height:50,
    backgroundColor:'#01a699',
    borderRadius:30,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    color: COLORS.white,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default App;
