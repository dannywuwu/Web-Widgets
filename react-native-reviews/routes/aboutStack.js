import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import ReviewDetails from '../screens/reviewDetails';
import About from '../screens/about';

const Stack = createStackNavigator();

export const AboutStack = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name="About" component={About} />
                <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AboutStack;