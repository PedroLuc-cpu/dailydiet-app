import { Image, View, Text, TouchableOpacity, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ArrowUpRight, Plus } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

interface MealProps {
  id: string;
  time: string;
  name: string;
  description?: string;
  status: boolean;
}

interface MealListProps {
  id: string;
  date: string;
  meals: MealProps[];
}

const mealsList: MealListProps[] = [
  {
    id: "1",
    date: "12.08.22",
    meals: [
      { id: "1", time: "20:00", name: "X-tudo", status: false },
      {
        id: "2",
        time: "16:00",
        name: "Whey protein com leite",
        status: true,
      },
      {
        id: "3",
        time: "12:30",
        name: "Salada césar com frango",
        status: true,
      },
      {
        id: "4",
        time: "09:30",
        name: "Vitamina de banana com...",
        status: true,
      },
    ],
  },
  {
    id: "3",
    date: "12.08.22",
    meals: [
      { id: "1", time: "20:00", name: "X-tudo", status: false },
      {
        id: "2",
        time: "16:00",
        name: "Whey protein com leite",
        status: true,
      },
      {
        id: "3",
        time: "12:30",
        name: "Salada césar com frango",
        status: true,
      },
      {
        id: "4",
        time: "09:30",
        name: "Vitamina de banana com...",
        status: true,
      },
    ],
  },
  {
    id: "2",
    date: "12.08.22",
    meals: [
      { id: "1", time: "20:00", name: "X-tudo", status: false },
      {
        id: "2",
        time: "16:00",
        name: "Whey protein com leite",
        status: true,
      },
      {
        id: "3",
        time: "12:30",
        name: "Salada césar com frango",
        status: true,
      },
      {
        id: "4",
        time: "09:30",
        name: "Vitamina de banana com...",
        status: true,
      },
    ],
  },
];

const Item = ({ date, meals }: MealListProps) => (
  <View>
    <Text className="text-2xl font-semibold">{date}</Text>
    <View>
      <FlatList
        data={meals}
        renderItem={({ item }) => (
          <View className="ring-2 ring-gray5 rounded-md flex my-2 p-3 flex-row items-center justify-between">
            <View className="flex flex-row items-center gap-4 py-2">
              <Text className="text-gray1 text-xl font-semibold">
                {item.time}
              </Text>
              <Text className="text-gray2 text-base font-normal border-s-[1px] border-gray4 px-2">
                {item.name}
              </Text>
            </View>
            <View
              className={`w-[14px] h-[14px] bg-${
                item.status ? "greenMid" : "redMid"
              } rounded-full`}
            />
          </View>
        )}
      />
    </View>
  </View>
);

export default function Index() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <SafeAreaView
      style={{ paddingTop: insets.top }}
      className="flex-1 m-4 gap-4"
    >
      <View className="flex justify-between flex-row p-4">
        <Image source={require("../../assets/images/DallyDiet.png")} />
        <Image source={require("../../assets/images/Ellipse.png")} />
      </View>
      <View className="bg-greenMid rounded-md py-4">
        <View className="flex flex-row justify-end px-4">
          <ArrowUpRight color={"#639339"} size={24} />
        </View>
        <View className="flex justify-center items-center">
          <Text className="text-gray1 text-5xl font-bold">90,86%</Text>
          <Text className="text-gray2">das refeições dentro da dieta</Text>
        </View>
      </View>
      <View>
        <View className="flex gap-2">
          <Text className="text-gray1 text-xl">Refeições</Text>
          <TouchableOpacity
            className="bg-gray2 p-5 rounded-lg flex flex-row gap-2 justify-center items-center"
            onPress={() => router.push("/(newMeal)")}
          >
            <Plus color={"#ffff"} size={24} />
            <Text className="text-white font-bold">Nova refeição</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={mealsList}
        renderItem={({ item }) => (
          <Item date={item.date} meals={item.meals} id={item.id} />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
