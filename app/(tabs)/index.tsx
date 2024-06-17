import { Image, StyleSheet } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
export default function HomeScreen() {
  type Todo = {
    id: number;
    title: string;
    description: string;
    dueDate: string;
    done: boolean;
  }
  const sampleTodoList: Todo[] = [
    {
      id: 1,
      title: "Buy groceries",
      description: "Milk, Bread, Eggs, Cheese",
      dueDate: "2024-06-18",
      done: false,
    },
    {
      id: 2,
      title: "Finish project report",
      description: "Complete the final draft of the project report",
      dueDate: "2024-06-19",
      done: false,
    },
    {
      id: 3,
      title: "Call the dentist",
      description: "Schedule a check-up appointment",
      dueDate: "2024-06-20",
      done: true,
    },
    {
      id: 4,
      title: "Workout session",
      description: "1-hour session at the gym",
      dueDate: "2024-06-21",
      done: false,
    },
    {
      id: 5,
      title: "Read a book",
      description: "Finish reading 'Atomic Habits' by James Clear",
      dueDate: "2024-06-22",
      done: false,
    },
    {
      id: 6,
      title: "Plan weekend trip",
      description: "Research and plan the itinerary for the trip",
      dueDate: "2024-06-23",
      done: true,
    },
    {
      id: 7,
      title: "Prepare presentation",
      description: "Create slides for the upcoming meeting",
      dueDate: "2024-06-24",
      done: false,
    },
    {
      id: 8,
      title: "Water the plants",
      description: "Water all indoor and outdoor plants",
      dueDate: "2024-06-25",
      done: true,
    },
    {
      id: 9,
      title: "Update resume",
      description: "Add recent projects and skills to the resume",
      dueDate: "2024-06-26",
      done: false,
    },
    {
      id: 10,
      title: "Organize photo album",
      description: "Sort and organize recent photos into albums",
      dueDate: "2024-06-27",
      done: false,
    },
  ];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to My Todo App</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedText>
        This is a simple todo app built with React Native and Expo.
      </ThemedText>
      {sampleTodoList.map((todo) => (

        <ThemedView key={todo.id} style={styles.stepContainer}>
          <ThemedView style={styles.tasktitleContainer}>
            <ThemedText type="subtitle">{todo.title}</ThemedText>
            <ThemedText style={todo.done ? styles.done : styles.notDone}> {todo.done ? 'Done' : 'Not Done'}</ThemedText>
          </ThemedView>

          <ThemedText>{todo.description}</ThemedText>
          <ThemedText>Due Date: {todo.dueDate}</ThemedText>

        </ThemedView>
      ))}



    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  tasktitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    justifyContent: 'space-between',
  },
  done:{
    color: 'green',
    backgroundColor: '#86efac',
    padding: 2,
    borderRadius: 15,
  
  },
  notDone:{
    color: 'red',
    backgroundColor: '#fca5a5',
    padding: 2,
    borderRadius: 15,
  }


});
