import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { DatePickerModal } from 'react-native-paper-dates';

export const InputDate = ({ label, value, onChangeDate }) => {
  const [open, setOpen] = useState(false);

  return (
    <View style={{ marginVertical: 8 }}>
      <Text style={{ marginBottom: 4 }}>{label}</Text>

      <Button
        mode="outlined"
        onPress={() => setOpen(true)}
        contentStyle={{ justifyContent: 'flex-start' }}
      >
        {value ? new Date(value).toLocaleDateString() : 'Selecciona una fecha'}
      </Button>

      <DatePickerModal
        locale="es"
        mode="single"
        visible={open}
        onDismiss={() => setOpen(false)}
        date={value ? new Date(value) : undefined}
        onConfirm={({ date }) => {
          setOpen(false);
          onChangeDate(date);
        }}
      />
    </View>
  );
};
