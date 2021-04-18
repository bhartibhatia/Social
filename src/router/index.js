import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../home';
import { Auth } from '../auth';
import { Explore } from '../explore';



const MainStack = createStackNavigator();

export default function Router()
{

   
    return(
        <NavigationContainer>
            <MainStack.Navigator>
                <MainStack.Screen name={"auth"} component={Auth}/>
<MainStack.Screen name={"home"} component={Home}/>
<MainStack.Screen name={"explore"} component={Explore}/>
            </MainStack.Navigator>
        </NavigationContainer>
    )
}