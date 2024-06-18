import { Image, StyleSheet, Alert, TextInput, Button } from "react-native";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import iconSet from "@expo/vector-icons/build/Fontisto";
interface todoitem {
  id: string;

  title: string;
  done: boolean;
}
export default function HomeScreen() {
  const [title, setTitle] = useState<string>("");
  const [todoitems, setTodoItems] = useState<todoitem[]>([]);
  const loadTodoItems = async () => {
    try {
      const jsonvalue = await AsyncStorage.getItem("@todoItems");
      const items: todoitem[] = jsonvalue != null ? JSON.parse(jsonvalue) : [];
      setTodoItems(items);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    loadTodoItems();
  }, []);
  const saveTodoItems = async (items: todoitem[]) => {
    try {
      const jsonvalue = JSON.stringify(items);
      await AsyncStorage.setItem("@todoItems", jsonvalue);
    } catch (e) {
      console.log(e);
    }
  };
  const addTodoItem = () => {
    if (title.trim() === "") {
      return;
    }
    const newitem = {
      id: new Date().getTime().toString(),
      title: title,
      done: false,
    };
    const newitems = [...todoitems, newitem];
    setTodoItems(newitems);
    saveTodoItems(newitems);
    setTitle("");
  };
  const toggleDone = (id: string) => {
    const newitems = todoitems.map((item) => {
      if (item.id === id) {
        return { ...item, done: !item.done };
      }
      return item;
    });
    setTodoItems(newitems);
    saveTodoItems(newitems);
    console.log(newitems);
  };
  const deleteItem = (id: string) => {
    const newitems = todoitems.filter((item) => item.id !== id);
    setTodoItems(newitems);
    saveTodoItems(newitems);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">My Todo App</ThemedText>
        <HelloWave />
      </ThemedView>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1, padding: 10 }}
        placeholder="Enter your todo"
        value={title}
        onChangeText={setTitle}
        returnKeyType="default"
        onKeyPress={(e) => {
          if (e.nativeEvent.key === "enter") {
            addTodoItem();
          }
        }
        }
      />
      <Button title="Add" onPress={addTodoItem}  

      />

      {todoitems.map((todo) => (
        <ThemedView key={todo.id} style={styles.stepContainer}>
          <ThemedView style={styles.tasktitleContainer}>
            <Ionicons
              name="checkmark-done-circle"
              size={28}
              color={todo.done ? "green" : "grey"}
              onPress={() => toggleDone(todo.id)}
            />
            <ThemedText type="subtitle">{todo.title}</ThemedText>
          </ThemedView>
          <Ionicons
            name="trash-bin"
            size={24}
            color="red"
            onPress={() => deleteItem(todo.id)}
          />
        </ThemedView>
      ))}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  tasktitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    justifyContent: "space-between",
  },
  done: {
    color: "green",
    backgroundColor: "#86efac",
    padding: 5,
    borderRadius: 15,
  },
  notDone: {
    color: "red",
    backgroundColor: "#fca5a5",
    padding: 5,
    borderRadius: 15,
  },
  iconset: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
