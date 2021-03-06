import { Paper } from 'byh-components';
import React from 'react';
import { useDispatch } from 'react-redux';
import { searchAdvert } from '../../../GlobalTypes/searchAdvert';
import { fetchSearchDataForCount } from '../../../Store/ducks/searchCar/searchCarReducer';
import { BottomPart } from '../Components/ButtomPart/BottomPart';
import { MakePicker } from '../Components/MakePicker/MakePicker';
import { MillageForm } from '../Components/MillageForm/MillageForm';
import { ModelForm } from '../Components/ModelForm/ModelForm';
import './CarSelectorForm.scss';
export const CarSelectorForm = () => {
  const [selectedData, setSelectedData] = React.useState<searchAdvert>({});
  const dispatch = useDispatch();

  React.useEffect(() => {
    selectedData && dispatch(fetchSearchDataForCount(selectedData));
  }, [dispatch, selectedData]);

  return (
    <Paper display={'flex'} style={{ padding: 15 }} height={397}>
      <MakePicker setSelectedData={setSelectedData} />
      <div className="car-selector-from__wrapper" data-testid="car-selector-from__wrapper">
        <div style={{ display: 'flex' }}>
          <ModelForm setSelectedData={setSelectedData} />
          <MillageForm setSelectedData={setSelectedData} />
        </div>
        <BottomPart selectedData={selectedData} />
      </div>
    </Paper>
  );
};
