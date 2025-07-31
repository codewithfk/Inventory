import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../utils/colors';
import CustomButton from '../components/customButton/CustomButton';
interface Props {
  item: InventoryItemType;
  onEdit: (item: InventoryItemType) => void;
  onDelete: (id: string) => void;
}

export default function InventoryItem({ item, onEdit, onDelete }: Props) {
  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={{ color: colors.white, marginTop: 7 }}>
          Qty: {item.quantity} | Price: ₹{item.price}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginTop:20 ,
        }}
      >
        <CustomButton
          containerStyle={{
            borderColor: colors.white,
            borderWidth: 1,
          }}
          textStyle={{ color: colors.white }}
          text="Delete"
          onPress={() => onDelete(item.id)}
        />
        <CustomButton text={'Update'}   containerStyle={{
            backgroundColor: colors.white,
          }} textStyle={{ color: colors.blue }} onPress={() => onEdit(item)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: colors.blue,
    borderRadius: 8,
    justifyContent: 'space-between',
    elevation: 2,
  },
  name: { fontWeight: 'bold', fontSize: 20, color: colors.white },
  delete: { fontSize: 18, color: 'red' },
});
