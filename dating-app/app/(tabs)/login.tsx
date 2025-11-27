import React from 'react';
import Icon from '@expo/vector-icons';
import { Stack, router } from 'expo-router';
import { useAuthContext } from '@/hooks/use-auth-context';

import { Formik } from 'formik';
import * as yup from 'yup';

import { 
  StyleSheet, 
  View, 
  Pressable, 
  Image, 
  Text, 
  TextInput, 
  TouchableOpacity } from 'react-native';

import { ThemedText } from '@/components/themed-text'
import { ThemedView } from '@/components/themed-view'


// -----------------------------
// Yup validation schema
// -----------------------------
const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

// -----------------------------
// Main Component
// -----------------------------
export default function LoginScreen() {
  const { signIn, error } = useAuthContext();

  async function handleLogin(values: { email: string; password: string }) {
    const { email, password } = values;

    const success = await signIn(email, password);
    
    if (!success) {
      console.log(error);
      return;
    }

    // Navigate to home screen on success
    router.push('/apply');
  }

  return (
    <>
      <Stack.Screen options={{ title: 'Login' }} />

      <ThemedView style={styles.container}>
        <Image source={require('@/assets/images/logo-darkm.png')} style={styles.logo} />
        <ThemedText type="title" style={styles.title}>
          Login
        </ThemedText>
      
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{ email: '', password: '' }}
          onSubmit={handleLogin}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <>
            {/* EMAIL FIELD */}
              <View style={styles.inputContainer}>
                <Icon name="mail-outline" size={25} style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  keyboardType="email-address"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
              </View>

              {errors.email && touched.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}

              {/* PASSWORD FIELD */}
              <View style={styles.inputContainer}>
                <Icon name="lock-closed-outline" size={25} style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  secureTextEntry
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
              </View>

              {errors.password && touched.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}

              {/* FORGOT PASSWORD
              <TouchableOpacity onPress={() => router.push('/Forget')}>              
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
              </TouchableOpacity> */}

              {/* LOGIN BUTTON */}
              <TouchableOpacity
                style={styles.button}
                onPress={() => router.push('/apply')}
                disabled={!isValid}
              >
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>

              {/* NAVIGATE TO SIGNUP */}
              <TouchableOpacity onPress={() => router.push('/apply')}>
                <Text style={styles.signUp}>
                  Don't have an account? <Text style={styles.signUpLink}>Apply!</Text>
                </Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </ThemedView>
    </>
  );
}

// -----------------------------
// Styles
// -----------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    height: 160,
    width: 160,
    resizeMode: 'contain',
    marginBottom: 20,
  },

  title: {
    marginBottom: 20,
  },

  inputContainer: {
    width: '100%',
    height: 50,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginBottom: 12,
  },

  input: {
    flex: 1,
    fontSize: 16,
  },

  icon: {
    marginRight: 10,
  },

  errorText: {
    color: 'red',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },

  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#6A1212',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },

  buttonDisabled: {
    backgroundColor: '#999',
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },

  signUp: {
    color: '#000',
  },

  signUpLink: {
    color: '#6A1212',
    fontWeight: '600',
  },
});