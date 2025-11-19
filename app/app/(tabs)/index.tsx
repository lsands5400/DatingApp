import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/ui/collapsible';
import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';
import SignOutButton from '@/components/social-auth-buttons/sign-out-button'
import { useAuthContext } from '@/hooks/use-auth-context'

export default function index() {
  return (
    <ParallaxScrollView
          headerBackgroundColor={{ light: '#6A1212', dark: '#6A1212' }}
          headerImage={
            <Image 
              source={require('@/assets/images/logo-darkm.png')}
              style={{ width: 500, height: 500, alignSelf: 'center', opacity: 0.2 }}
            />
          }
          headerText={
            <ThemedText
              type="title"
              style={{ fontFamily: 'baskerville', textAlign: 'center', opacity: 0.5, 
                width: '100%', height: '100%', justifyContent: 'center', fontSize: 150}}
            >
            Status
            </ThemedText>
          }>
          <ThemedView style={styles.titleContainer}>
            <ThemedText
              type="title"
              style={{
                fontFamily: 'baskerville',
              }}>
              Welcome to Status.
            </ThemedText>
          </ThemedView>
          <ThemedText>The dating app for intellectuals.</ThemedText>
          <ThemedText>Read more about us below.</ThemedText>
          <Collapsible title="What is this?">
            <ThemedText>
              This is our new dating app for impressive people.
              It's still in development, but the main features will include
              <ul>
              <li>In-app games to help start conversations</li>
              <li>Post-date surveys to help us match users</li>
              <li>A human-centered application process</li>
              </ul>
            </ThemedText>
            <ExternalLink href="https://www.tiktok.com/@status_dating">
              <ThemedText type="link">Follow us on TikTok</ThemedText>
            </ExternalLink>
            <ExternalLink href="https://www.instagram.com/status_dating/">
              <ThemedText type="link">Follow us on Instagram</ThemedText>
            </ExternalLink>
          </Collapsible>
          <Collapsible title="How do I join?">
            <ThemedText>
              You can navigate to the form at 
              <ExternalLink href="https://tinyurl.com/betadate">
              <ThemedText type="link"> this link</ThemedText>
            </ExternalLink>
              . Once the rest of the app is up, we will review applications on a rolling basis.
            </ThemedText>
          </Collapsible>
          <Collapsible title='What makes someone "impressive"?'>
            <ThemedText>
              You decide! But if you work better with examples, here are a few:
            </ThemedText>
            <ThemedText>
              <ul>
              <li>Studying or otherwise pursuing a complex topic you're passionate about</li>
              <li>Exploring the world</li>
              <li>Starting your own business or company</li>
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
        fontFamily: 'Baskerville'
      },
    });