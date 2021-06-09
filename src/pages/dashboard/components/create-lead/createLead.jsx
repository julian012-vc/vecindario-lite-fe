import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './createLead.scss';
import { TYPE_PROJECTS } from '../../../../constants/type-projects';
import { CREATE_LEAD_SUCESS_URL, PROJECTS_PICTURE_URL } from '../../../../constants';
import Input from '../../../../components/input/input';
import * as Icons from '../../../../constants/icons';
import PhoneInput from '../../../../components/phone-input/phoneInput';
import { useDispatch, useSelector } from 'react-redux';
import { selectLeadForm } from '../../../../redux/selectors/lead/lead-form.selector';
import { useForm } from 'react-hook-form';
import * as Colors from '../../../../constants/colors';
import Button from '../../../../components/button/button';
import {
  cleanCreateLead,
  createLead,
  createLeadSucess,
  createLeadWithErrors,
} from '../../../../redux/slices/lead/lead-form.slice';
import { isValidForm, mappingError, validateForm } from '../../../../helpers/form-validation';
import { LEAD_FORM_VALIDATION } from '../../../../helpers/validations/user.validation';
import { createLeadService } from '../../../../services/lead.service';
import { closeModal } from '../../../../redux/slices/modal.slice';
import { selectUser } from '../../../../redux/selectors/user.selector';

const CreateLead = ({ project, image }) => {
  const createLeadForm = useSelector(selectLeadForm);
  const user = useSelector(selectUser);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      createLeadService(project.id, {}).then(() => {
        dispatch(createLeadSucess());
      });
    }
  }, [user, project.id, dispatch]);

  const onSubmit = async data => {
    dispatch(createLead(data));
    if (await isValidForm(data, LEAD_FORM_VALIDATION)) {
      createLeadService(project.id, data)
        .then(() => {
          dispatch(createLeadSucess());
        })
        .catch(err => {
          dispatch(createLeadWithErrors(err.errors));
        });
    } else {
      validateForm(data, LEAD_FORM_VALIDATION).catch(err => {
        dispatch(createLeadWithErrors(mappingError(err)));
      });
    }
  };

  const closeModalSucess = () => {
    dispatch(cleanCreateLead());
    dispatch(closeModal());
  };

  return (
    <div className='create-lead__container'>
      <div className='create-lead__container--header'>
        <div className='create-lead__container--header--photo'>
          <img src={PROJECTS_PICTURE_URL[image]} alt='icon' />
        </div>
        <div className='create-lead__container--header--wrapper'>
          <div className='create-lead__container--header--wrapper--title'>{project.title}</div>
          <div className='create-lead__container--header--wrapper--description'>
            {project.title}, apartamentos nuevos en venta en {project.city}
          </div>
          <div className='create-lead__container--header--wrapper--type-project'>
            {TYPE_PROJECTS[project.type_project]} | Sobre planos
          </div>
          <div className='create-lead__container--header--wrapper--location'>
            <div className='create-lead__container--header--wrapper--location--city'>
              {project.city}:
            </div>
            <div className='create-lead__container--header--wrapper--location--address'>
              {project.address}
            </div>
          </div>
        </div>
      </div>
      {!createLeadForm.isCreated && !user && (
        <div className='create-lead__container--body'>
          <div className='create-lead__container--body--title'>
            Registra tus datos para recibir más información
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className='create-lead__container--body--form'>
            <Input
              placeholder='Nombres'
              icon={Icons.USER_ICON}
              register={register}
              formValue='first_name'
              errorSelector={createLeadForm.errors}
            />
            <Input
              placeholder='Apellidos'
              icon={Icons.USER_ICON}
              register={register}
              formValue='last_name'
              errorSelector={createLeadForm.errors}
            />
            <Input
              placeholder='E-mail'
              icon={Icons.EMAIL_ICON}
              register={register}
              formValue='email'
              errorSelector={createLeadForm.errors}
            />
            <PhoneInput
              register={register}
              placeholder='Número de telefono'
              formValue='phone'
              errorSelector={createLeadForm.errors}
            />
            <div className='create-lead__container--body--form--divider' />
            <Button
              background={Colors.YELLOW_PRIMARY}
              onHoverColor={Colors.YELLOW_SECONDARY}
              text='Guardar'
              type='submit'
              isLoading={createLeadForm.isLoading}
            />
          </form>
        </div>
      )}
      {createLeadForm.isCreated && (
        <div className='create-lead__container--footer'>
          <div className='create-lead__container--footer--body'>
            <div className='create-lead__container--footer--body--img'>
              <img src={CREATE_LEAD_SUCESS_URL} alt='success' />
            </div>
            <div className='create-lead__container--footer--body--title'>
              Guardado correctamente
            </div>
            <div className='create-lead__container--footer--body--message'>
              El asesor del proyecto pronto se comunicara contigo
            </div>
          </div>
          <div className='create-lead__container--footer--close'>
            <Button
              background={Colors.WHITE}
              onHoverColor={Colors.YELLOW_PRIMARY}
              text='Cerrar'
              onClickAction={closeModalSucess}
            />
          </div>
        </div>
      )}
    </div>
  );
};

CreateLead.prototype = {
  project: PropTypes.object,
  image: PropTypes.number,
};

export default CreateLead;
