import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";

import PopularJobCard from "../../../components/common/cards/popular/PopularJobCard";
import styles from "./popularjobs.style";
import { useRouter } from "expo-router";
import { COLORS, SIZES } from "../../../constants";
import useFetch from "../../../hook/useFetch";

const Popularjobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("search", {
    query: "React Developer",
    num_page: 1,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity style={styles.headerBtn}>
          <Text>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something Went Wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => <PopularJobCard item={item} />}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
