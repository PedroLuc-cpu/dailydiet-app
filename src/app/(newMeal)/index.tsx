import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  const [isDiet, setIsDiet] = useState<boolean | null>(null);
  return (
    <SafeAreaView className="bg-gray5 flex-1">
      <View className="bg-gray7 rounded-3xl flex-1">
        <ScrollView className="flex-1 px-4 py-6">
          <View>
            <Text className="font-semibold text-lg">Nome</Text>
            <TextInput className="ring-2 ring-gray5 rounded-md p-4 text-gray1 " />
          </View>
          <View className="mt-4">
            <Text className="font-semibold text-lg">Descrição</Text>
            <TextInput
              className="ring-2 ring-gray5 rounded-md p-4 text-gray1 h-32 align-top"
              multiline
              numberOfLines={4}
            />
          </View>
          <View className="flex flex-row gap-4 mt-4">
            <View className="flex-1">
              <Text className="font-semibold text-lg">Data</Text>
              <TextInput className="ring-2 ring-gray5 rounded-md p-4 text-gray1" />
            </View>
            <View className="flex-1">
              <Text className="font-semibold text-lg">Hora</Text>
              <TextInput className="ring-2 ring-gray5 rounded-md p-4 text-gray1" />
            </View>
          </View>
          <View className="mt-4">
            <Text className="font-semibold text-lg pb-2">
              Está dentro da dieta?
            </Text>
            <View className="flex flex-row gap-4">
              <TouchableOpacity
                onPress={() => setIsDiet(true)}
                activeOpacity={1}
                className={`flex-1 flex-row p-4 items-center justify-center gap-2 rounded-md border ${
                  isDiet === true
                    ? "border-greenDark bg-greenLight"
                    : "bg-gray6 border-transparent"
                }`}
              >
                <View
                  className={`h-2 w-2 rounded-full ${
                    isDiet === true ? "bg-greenDark" : "bg-greenMid"
                  }`}
                />
                <Text
                  className={`font-bold ${
                    isDiet === true ? "text-greenDark" : ""
                  }`}
                >
                  Sim
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setIsDiet(false)}
                activeOpacity={1}
                className={`flex-1 flex-row p-4 items-center justify-center gap-2 rounded-md border ${
                  isDiet === false
                    ? "border-redDark bg-redLight"
                    : "bg-gray6 border-transparent"
                }`}
              >
                <View
                  className={`h-2 w-2 rounded-full ${
                    isDiet === false ? "bg-redDark" : "bg-redMid"
                  }`}
                />
                <Text
                  className={`font-bold ${
                    isDiet === false ? "text-redDark" : ""
                  }`}
                >
                  Não
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        <View className="px-4 pb-6 bg-white">
          <TouchableOpacity
            className="bg-gray2 p-6 rounded-lg flex flex-row gap-2 justify-center items-center"
            activeOpacity={1}
          >
            <Text className="text-white font-bold">Cadastrar refeição</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
