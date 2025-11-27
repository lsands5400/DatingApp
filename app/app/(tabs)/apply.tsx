import React, {useState} from 'react';
import {StyleSheet, Text, Pressable, Linking} from 'react-native';
import { Image } from 'expo-image';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Card } from 'react-native-elements';

export default function Apply() {
  const handlePress = () => {
    Linking.openURL('https://forms.gle/NVtUXh6VPqJM83rZ8');
  };
  return (
    <ThemedView style={styles.container}>
      <ThemedText
          type="title"
          style={{
            fontFamily: 'baskerville',
          }}>
          Apply for Status.
      </ThemedText>
      <Card>
        <>
          <ThemedText> Are you interesting?</ThemedText>
          <ThemedText>Are you looking for someone who will intellectually stimulate you?</ThemedText>
          <ThemedText>Are you looking for someone peer-reviewed?</ThemedText>
        </>
      </Card>
      
      <Pressable style={[styles.button, styles.buttonOpen]}>
        <Text style={styles.textStyle} onPress={handlePress}>Submit an application</Text>
      </Pressable>

      <ThemedText
          type="title">
          How It Works
        </ThemedText>
      <ThemedText>
        Currently, the application is a Google form. You can fill out the Google form and 
        answer all the questions. Once you submit, a member of our team will review your submission. 
        If you are approved, we will send you a code that you can use to create an account. From there, 
        you will be able to freely match and interact with other users.
      </ThemedText>

      <ThemedText
          type="title">
          What We Are Looking For
        </ThemedText>
      <ThemedText>
        You don't have to be a Nobel Laureate to apply. We simply want to ensure that we are presenting
        serious options to you and our other users. We want some proof that you have passions and goals
        that are of a caliber that we desire for our users. Let us know if you have an interesting hobby, 
        a hidden talent, or a grand plan for your life. The application offers a place to submit supplementary 
        files and links, so feel free to upload art or websites or documents.
      </ThemedText>

      <Image
          source={require('@/assets/images/logo-darkm.png')}
          style={{ width: 100, height: 100, alignSelf: 'center' }}
        />
    </ThemedView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFD4D4',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#6A1212',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  titleContainer: {
      flexDirection: 'row',
      gap: 8,
      fontFamily: 'Baskerville'
    },
});

/*<ThemedView style={styles.container}>
            <ThemedText type="title">This is a modal</ThemedText>
            <Link href="/" dismissTo style={styles.link}>
                <ThemedText type="link">Start Application</ThemedText>
            </Link>
            </ThemedView> */