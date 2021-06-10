import React from 'react';

import './editProject.scss';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectEditProject, selectProjectToEdit } from '../../../../redux/selectors/admin.selector';
import {
  cleanEditProject,
  editProject,
  editProjectSuccess,
  editProjectWithErrors,
} from '../../../../redux/slices/admin.slice';
import { isValidForm, mappingError, validateForm } from '../../../../helpers/form-validation';
import { CREATE_FORM_VALIDATION } from '../../../../helpers/validations/project.validation';
import { updateProject } from '../../../../services/project.service';
import { CREATE_PROJECT_IMAGE_URL, REGISTER_PROJECT_SUCCESS_URL } from '../../../../constants';
import Input from '../../../../components/input/input';
import * as Icons from '../../../../constants/icons';
import SelectInput from '../../../../components/select-input/selectInput';
import { truFalseOptions, typeProjectsToArray } from '../../../../helpers';
import InputNumber from '../../../../components/input-number/inputNumber';
import Button from '../../../../components/button/button';
import * as Colors from '../../../../constants/colors';
import { closeModal } from '../../../../redux/slices/modal.slice';

const EditProject = () => {
  const { register, handleSubmit, control } = useForm();
  const form = useSelector(selectEditProject);
  const project = useSelector(selectProjectToEdit);
  const dispatch = useDispatch();

  const onSubmit = async data => {
    dispatch(editProject(data));
    if (await isValidForm(data, CREATE_FORM_VALIDATION)) {
      updateProject(data, project.id)
        .then(res => {
          dispatch(editProjectSuccess(res));
        })
        .catch(err => {
          console.log(err);
          dispatch(editProjectWithErrors(err.errors));
        });
    } else {
      validateForm(data, CREATE_FORM_VALIDATION).catch(err => {
        dispatch(editProjectWithErrors(mappingError(err)));
      });
    }
  };

  const onClose = () => {
    dispatch(cleanEditProject());
    dispatch(closeModal());
  };

  return (
    <div className='create-project__container'>
      {!form.isUpdated && (
        <>
          <div className='create-project__container--header'>
            <img src={CREATE_PROJECT_IMAGE_URL} alt='icon' />
            <div className='create-project__container--header--title'>Edita tu proyecto</div>
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
                value={project}
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
                  value={project}
                  defaultValue=''
                />
                <div className='input-form__container--wrapper--space' />
                <InputNumber
                  placeholder='Número de baños'
                  icon={Icons.BATHROOMS_ICON}
                  prefix=''
                  control={control}
                  formValue='bathrooms'
                  initialValue={project}
                  errorSelector={form.errors}
                />
              </div>

              <Input
                placeholder='Ciudad'
                icon={Icons.CITY_PROJECT_ICON}
                register={register}
                formValue='city'
                value={project}
                errorSelector={form.errors}
              />
              <Input
                placeholder='Direccion'
                icon={Icons.ADDRESS_PROJECT_ICON}
                register={register}
                formValue='address'
                value={project}
                errorSelector={form.errors}
              />
              <InputNumber
                placeholder='Precio'
                icon={Icons.PRICE_PROJECT_ICON}
                prefix='$'
                control={control}
                formValue='price'
                initialValue={project}
                errorSelector={form.errors}
              />

              <div className='input-form__container--wrapper'>
                <InputNumber
                  placeholder='Area privada'
                  icon={Icons.PRIVATE_AREA_ICON}
                  prefix=''
                  control={control}
                  formValue='private_area'
                  initialValue={project}
                  errorSelector={form.errors}
                />
                <div className='input-form__container--wrapper--space' />
                <InputNumber
                  placeholder='Area construida'
                  icon={Icons.BUILDING_AREA_ICON}
                  prefix=''
                  control={control}
                  formValue='building_area'
                  initialValue={project}
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
                  value={project}
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
                  value={project}
                  defaultValue={false}
                />
              </div>

              <Input
                placeholder='E-mail'
                icon={Icons.EMAIL_ICON}
                register={register}
                formValue='email'
                value={project}
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
      {form.isUpdated && (
        <div className='create-project__container--footer'>
          <img
            src={REGISTER_PROJECT_SUCCESS_URL}
            className='create-project__container--footer--img'
            alt='sucess'
          />
          <div className='create-project__container--footer--title'>
            Projecto actualizado correctamente
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

export default EditProject;
