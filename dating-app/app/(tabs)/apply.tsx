import { Image } from 'expo-image';
import React, {useState} from 'react';
import { Text, Pressable, StyleSheet, Linking, View, ScrollView } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function Apply() {
  const handlePress = () => {
    Linking.openURL('https://forms.gle/NVtUXh6VPqJM83rZ8');
  };
  return (
    <ScrollView>
      <ThemedView style={styles.container}>
        <View style={{padding:20}}>
          <ThemedText
              type="title"
              style={{
                fontFamily: 'baskerville',
              }}>
              Apply for Status.
          </ThemedText>
        </View>

        <View style={{padding:20}}>
          <ThemedText>Are you interesting?</ThemedText>
          <ThemedText>Are you looking for someone who will intellectually stimulate you?</ThemedText>
          <ThemedText>Are you looking for someone peer-reviewed?</ThemedText>
        </View>

        <View style={{padding:20}}>
          <Pressable style={[styles.button, styles.buttonOpen]}>
            <Text style={styles.textStyle} onPress={handlePress}>Submit an application</Text>
          </Pressable>
        </View>

        <View style={{padding:20}}>
          <ThemedText
              type="title">
              How It Works
            </ThemedText>
        </View>

        <View style={{padding:20, width:600}}>
          <ThemedText>
            Currently, the application is a Google form. You can fill out the Google form and 
            answer all the questions. Once you submit, a member of our team will review your submission. 
            If you are approved, we will send you a code that you can use to create an account. From there, 
            you will be able to freely match and interact with other users.
          </ThemedText>
        </View>

        <View style={{padding:20}}>
          <ThemedText
              type="title">
              What We Are Looking For
            </ThemedText>
        </View>

        <View style={{padding:20, width:600}}>
          <ThemedText>
            You don't have to be a Nobel Laureate to apply. We simply want to ensure that we are presenting
            serious options to you and our other users. We want some proof that you have passions and goals
            that are of a caliber that we desire for our users. Let us know if you have an interesting hobby, 
            a hidden talent, or a grand plan for your life. The application offers a place to submit supplementary 
            files and links, so feel free to upload art or websites or documents.
          </ThemedText>
        </View>

        <Image
            source={require('@/assets/images/logo-darkm.png')}
            style={{ width: 100, height: 100, alignSelf: 'center' }}
          />
      </ThemedView>  
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
   button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#6A1212',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});