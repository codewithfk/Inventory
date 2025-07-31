import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomButton from '../components/customButton/CustomButton';
import CustomInput from '../components/customInput/CustomInput';
import colors from '../utils/colors';
import useAddItem from './useAddItem';
interface TAddItem{
    handleClose?:()=>void
}
export default function AddItem({handleClose}:TAddItem) {
    const {formik:{values,handleChange,handleBlur,touched,errors,handleSubmit},setCurrentItem,currentItem} = useAddItem(handleClose)
  return (
    <>
    <CustomInput
      placeholder="Item Name"
      value={values.name}
      onChangeText={handleChange('name')}
      onBlur={handleBlur('name')}
      error={touched.name ? errors.name:'' }
      containerStyle={{marginBottom:15}}
    />
    <CustomInput
      placeholder="Quantity"
      value={values.quantity}
      onChangeText={handleChange('quantity')}
      onBlur={handleBlur('quantity')}
      keyboardType="numeric"
      error={touched.quantity ? errors.quantity:'' }
      containerStyle={{marginBottom:15}}
    />

    <CustomInput
      placeholder="Price"
      value={values.price}
      onChangeText={handleChange('price')}
      onBlur={handleBlur('price')}
      keyboardType="numeric"
      error={touched.price ? errors.price:'' }
      containerStyle={{marginBottom:15}}
    />
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',marginBottom:10}}>
      <CustomButton containerStyle={{backgroundColor:colors.white,borderColor:colors.blue,borderWidth:1}}
      textStyle={{color:colors.blue}} text='Cancel' onPress={() => {handleClose&&  handleClose(); setCurrentItem(undefined); }}/>
      <CustomButton text={currentItem ? "Update" : "Add"} onPress={handleSubmit as any}/>
    </View>
  </>
  )
}

const styles = StyleSheet.create({
    input: {
      borderWidth: 1,
      padding: 10,
      marginVertical: 5,
      borderRadius: 5,
    },
    error: {
      color: 'red',
      fontSize: 12,
      marginBottom: 5,
    },
  });