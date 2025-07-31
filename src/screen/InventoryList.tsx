import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import CustomButton from '../components/customButton/CustomButton';
import CustomModal from '../components/customModal/CustomModal';
import { useInventory } from '../context/InventoryContext';
import colors from '../utils/colors';
import AddItem from './AddItem';
import InventoryItem from './InventoryItem';

export default function InventoryScreen() {
  const { items, deleteItem, setCurrentItem } = useInventory();
  const [modalVisible, setModalVisible] = useState(false);

  const openModalToEdit = (item: InventoryItemType) => {
    setCurrentItem(item);
    setModalVisible(true);
  };

  const openModalToAdd = () => {
    setCurrentItem(undefined);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
     
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <InventoryItem
            item={item}
            onEdit={openModalToEdit}
            onDelete={deleteItem}
          />
        )}
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 10,paddingBottom:40 }}
        ListEmptyComponent={
          <View style={styles.noDataContainer}>
            <Text style={styles.noDataText}>No Data Found</Text>
            <CustomButton text="Add Item" onPress={openModalToAdd} />
          </View>
        }
        ListHeaderComponent={ items?.length>0?<View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
           <Text style={styles.title}>Inventory</Text>
           <CustomButton text="Add Item" pressableStyle={{alignSelf:'flex-end'}} onPress={openModalToAdd} />
      
        </View>:<View><Text style={styles.title}>Inventory</Text></View>}
        stickyHeaderIndices={[0]}
        ListHeaderComponentStyle={{backgroundColor:colors.white,paddingBottom:15}}
      />
      <CustomModal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
        <AddItem handleClose={() => setModalVisible(false)} />
      </CustomModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50, backgroundColor: colors?.white },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 20,
  },
  noDataText: {
    fontSize: 30,
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: 20,
  },
  noDataContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
