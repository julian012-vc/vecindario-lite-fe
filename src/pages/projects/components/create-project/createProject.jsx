import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import Button from '../../../../components/button/button';
import Input from '../../../../components/input/input';
import InputNumber from '../../../../components/input-number/inputNumber';
import SelectInput from '../../../../components/select-input/selectInput';

import { truFalseOptions, typeProjectsToArray } from '../../../../helpers';
import { selectCreateProject } from '../../../../redux/selectors/admin.selector';
import { selectUser } from '../../../../redux/selectors/user.selector';
import {
  amendProject,
  cleanCreateProject,
  createProject,
  createProjectSuccess,
  createProjectWithErrors,
} from '../../../../redux/slices/admin.slice';
import { isValidForm, mappingError, validateForm } from '../../../../helpers/form-validation';
import { CREATE_FORM_VALIDATION } from '../../../../helpers/validations/project.validation';
import { closeModal } from '../../../../redux/slices/modal.slice';
import { registerProject } from '../../../../services/project.service';

import { CREATE_PROJECT_IMAGE_URL, REGISTER_PROJECT_SUCCESS_URL } from '../../../../constants';
import * as Colors from '../../../../constants/colors';
import * as Icons from '../../../../constants/icons';

import './createProject.scss';

const CreateProject = () => {
  const { register, handleSubmit, control } = useForm();
  const user = useSelector(selectUser);
  const form = useSelector(selectCreateProject);
  const dispatch = useDispatch();

  const onSubmit = async data => {
    console.log(data);
    dispatch(createProject(data));
    if (await isValidForm(data, CREATE_FORM_VALIDATION)) {
      registerProject(data, user.id)
        .then(res => {
          dispatch(createProjectSuccess());
          dispatch(amendProject(res));
        })
        .catch(err => {
          dispatch(createProjectWithErrors(err.errors));
        });
    } else {
      validateForm(data, CREATE_FORM_VALIDATION).catch(err => {
        dispatch(createProjectWithErrors(mappingError(err)));
      });
    }
  };

  const onClose = () => {
    dispatch(cleanCreateProject());
    dispatch(closeModal());
  };

  return (
    <div className='create-project__container'>
      {!form.isCreated && (
        <>
          <div className='create-project__container--header'>
            <img src={CREATE_PROJECT_IMAGE_URL} alt='icon' />
            <div className='create-project__container--header--title'>Registra tu proyecto</div>
          </div>
          <div className='create-project__container--body'>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='create-project__container--body--form'
            >
              <Input
                placeholder='Nombre del projecto'
                icon={Icons.PROJECT_TITLE_ICON}
                register={register}
                formValue='title'
                errorSelector={form.errors}
              />

              <div className='input-form__container--wrapper'>
                <SelectInput
                  icon={Icons.TYPE_PROJECT_ICON}
                  formValue='type_project'
                  errorSelector={form.errors}
                  register={register}
                  placeholder='Tipo de projecto'
                  options={typeProjectsToArray()}
                  defaultValue=''
                />
                <div className='input-form__container--wrapper--space' />
                <InputNumber
                  placeholder='Número de baños'
                  icon={Icons.BATHROOMS_ICON}
                  prefix=''
                  control={control}
                  formValue='bathrooms'
                  errorSelector={form.errors}
                />
              </div>

              <Input
                placeholder='Ciudad'
                icon={Icons.CITY_PROJECT_ICON}
                register={register}
                formValue='city'
                errorSelector={form.errors}
              />
              <Input
                placeholder='Direccion'
                icon={Icons.ADDRESS_PROJECT_ICON}
                register={register}
                formValue='address'
                errorSelector={form.errors}
              />
              <InputNumber
                placeholder='Precio'
                icon={Icons.PRICE_PROJECT_ICON}
                prefix='$'
                control={control}
                formValue='price'
                errorSelector={form.errors}
              />

              <div className='input-form__container--wrapper'>
                <InputNumber
                  placeholder='Area privada'
                  icon={Icons.PRIVATE_AREA_ICON}
                  prefix=''
                  control={control}
                  formValue='private_area'
                  errorSelector={form.errors}
                />
                <div className='input-form__container--wrapper--space' />
                <InputNumber
                  placeholder='Area construida'
                  icon={Icons.BUILDING_AREA_ICON}
                  prefix=''
                  control={control}
                  formValue='building_area'
                  errorSelector={form.errors}
                />
              </div>

              <div className='input-form__container--wrapper'>
                <SelectInput
                  icon={Icons.HAS_VIS_ICON}
                  formValue='has_vis'
                  errorSelector={form.errors}
                  register={register}
                  placeholder='Tiene subsidio'
                  options={truFalseOptions()}
                  defaultValue={false}
                />
                <div className='input-form__container--wrapper--space' />
                <SelectInput
                  icon={Icons.HAS_PARKING_ICON}
                  formValue='has_parking'
                  errorSelector={form.errors}
                  register={register}
                  placeholder='Tiene parqueadero'
                  options={truFalseOptions()}
                  defaultValue={false}
                />
              </div>

              <Input
                placeholder='E-mail'
                icon={Icons.EMAIL_ICON}
                register={register}
                formValue='email'
                errorSelector={form.errors}
              />

              <Button
                background={Colors.YELLOW_PRIMARY}
                onHoverColor={Colors.YELLOW_SECONDARY}
                text='Guardar'
                type='submit'
                isLoading={form.isLoading}
              />
            </form>
          </div>
        </>
      )}
      {form.isCreated && (
        <div className='create-project__container--footer'>
          <img
            src={REGISTER_PROJECT_SUCCESS_URL}
            className='create-project__container--footer--img'
            alt='sucess'
          />
          <div className='create-project__container--footer--title'>
            Projecto registrado correctamente
          </div>
          <div className='create-project__container--footer--message'>
            ¡Gracias por confiar en nosotros!
          </div>
          <Button
            background={Colors.YELLOW_PRIMARY}
            onHoverColor={Colors.YELLOW_SECONDARY}
            text='Cerrar'
            onClickAction={onClose}
          />
        </div>
      )}
    </div>
  );
};

export default CreateProject;
