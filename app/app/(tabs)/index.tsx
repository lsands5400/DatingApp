import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/ui/collapsible';
import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';

export default function index() {
  return (
    <ParallaxScrollView
          headerBackgroundColor={{ light: '#de7b7bff', dark: '#6A1212' }}
          headerImage={
            <Image
              source={require('@/assets/images/logo-darkm.png')}
              style={{ width: 500, height: 500, alignSelf: 'center' }}
            />
          }>
          <ThemedView style={styles.titleContainer}>
            <ThemedText
              type="title"
              style={{
                fontFamily: Fonts.rounded,
              }}>
              Welcome to Dating App!
            </ThemedText>
          </ThemedView>
          <ThemedText>The dating app for intellectuals.</ThemedText>
          <ThemedText>Read more about us below.</ThemedText>
          <Collapsible title="What is this?">
            <ThemedText>
              This is our new dating app for impressive people.
              It's still in the beta testing phase, so it may be a little rough around the edges.
            </ThemedText>
            {/* For when I can link the TikTok and Instagram pages

            <ExternalLink href="https://reactnative.dev/docs/images">
              <ThemedText type="link">Learn more</ThemedText> comment
            </ExternalLink>*/}
          </Collapsible>
          <Collapsible title="How do I join?">
            <ThemedText>
              You can navigate to the "Apply" tab to submit an application. Once the rest of the app is up, we will review applications on a rolling basis.
            </ThemedText>
          </Collapsible>
          <Collapsible title='What makes someone "impressive"?'>
            <ThemedText>
              You decide! But if you work better with examples, here are a few:
            </ThemedText>
            <ThemedText>
              <ul>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
              </ul>
            </ThemedText>
            <ThemedText>
              This is not an exhaustive list. 
              <ThemedText type="defaultSemiBold"> However</ThemedText>
              , we will not just take your word for it. 
              <ThemedText type="defaultSemiBold"> You will need proof </ThemedText>
              of any claims in your application.
            </ThemedText>
          </Collapsible>
          <Image
              source={require('@/assets/images/logo-darkm.png')}
              style={{ width: 100, height: 100, alignSelf: 'center' }}
            />
        </ParallaxScrollView>
      );
    }
    
    const styles = StyleSheet.create({
      headerImage: {
        color: '#c98c8cff',
        bottom: -90,
        left: -35,
        position: 'absolute',
        opacity: 0.5,
      },
      titleContainer: {
        flexDirection: 'row',
        gap: 8,
      },
    });