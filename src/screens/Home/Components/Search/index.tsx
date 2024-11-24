import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import SearchButton from '../SearchButton'; // Você precisa adaptar ou criar este componente
import { convertToArenaOptions, convertToCourtOptions } from '../../../../utils/index';
import { SearchContext } from '../..';

const colors = {
  offWhiter: '#F0F0F0',
  black: '#000000',
  greyLighter: '#AAAAAA',
  lightGrey: '#CCCCCC',
  white: '#FFFFFF',
};

const VideoSearch = ({ dataArena, onSearch }) => {
  const { court, arena, setArena, setCourt, date, setDate } = useContext(SearchContext);
  const [arenaOptions, setArenaOptions] = useState([]);
  const [courtOptions, setCourtOptions] = useState([]);
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    if (dataArena) {
      setArenaOptions(convertToArenaOptions(dataArena));
    }
  }, [dataArena]);

  useEffect(() => {
    if (arena) {
      setCourtOptions(convertToCourtOptions(arena));
    }
  }, [arena]);

  const isDisabled = !(arena && court && date);

  const formatDate = (date) => {
    if (!date) return '';
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth()+1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const getLabel = (value, options) => {
    const selectedOption = options.find(option => option.value === value);
    return selectedOption ? selectedOption.label : 'N/A';
  };

  return (
    <View style={styles.video_search_container}>
      <Text style={styles.h2}>Seus Vídeos</Text>
      <View style={styles.info}>
        <Text style={styles.p}>
          Arena: <Text style={styles.span}>{getLabel(arena, arenaOptions)}</Text>
        </Text>
        <Text style={styles.p}>
          Quadra: <Text style={styles.span}>{getLabel(court, courtOptions)}</Text>
        </Text>
      </View>
      <View style={styles.form}>
        <View style={styles.form_group}>
          <Text style={styles.label}>Arena</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={arena}
              onValueChange={(itemValue) => setArena(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Selecione a Arena" value={null} />
              {arenaOptions && arenaOptions.map((option) => (
                <Picker.Item label={option.label} value={option.value} key={option.value} />
              ))}
            </Picker>
          </View>
        </View>
        <View style={styles.form_group}>
          <Text style={styles.label}>Quadra</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={court}
              onValueChange={(itemValue) => setCourt(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Selecione a Quadra" value={null} />
              {courtOptions && courtOptions.map((option) => (
                <Picker.Item label={option.label} value={option.value} key={option.value} />
              ))}
            </Picker>
          </View>
        </View>
        <View style={styles.form_group}>
          <Text style={styles.label}>Data</Text>
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <TextInput
              value={date ? formatDate(date) : ''}
              placeholder="DD/MM/AAAA"
              style={styles.input}
              editable={false}
              pointerEvents="none"
            />
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={date || new Date()}
              mode="date"
              display="default"
              onChange={(event, selectedDate) => {
                setShowDatePicker(false);
                if (selectedDate) {
                  setDate(selectedDate);
                }
              }}
            />
          )}
        </View>
        <SearchButton onPress={onSearch} isDisabled={isDisabled} />
      </View>
    </View>
  );
};

export default VideoSearch;
