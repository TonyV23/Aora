import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'

import icons from "../constants/icons"

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {

  const [showPassword, setShowPassword] = useState(false)


  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="border-2 border-black-200 min-w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row">
        <TextInput className="w-full flex-1 text-white font-psemibold text-base" placeholder={placeholder} value={value} placeholderTextColor={"#7b7b8b"} onChangeText={handleChangeText} secureTextEntry={title === 'Password' && !showPassword}
        />
        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image source={!showPassword ? icons.eye : icons.eyeHide} resizeMode='contain' className="w-6 h-6" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )

}

export default FormField