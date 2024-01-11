<!-- https://uistore.dev/framework/buefy/form/login-form-with-image-on-left -->
<template lang="pug">
.section
  b-field.has-text-left(:label='formData.email.label', type='is-danger', message='vow')
    b-input(
      :has-counter='false',
      :maxlength='formData.email.maxLength',
      :minlength='formData.email.minLength',
      :placeholder='formData.email.placeholder',
      :use-html5-validation='false',
      key='email',
      required,
      type='email',
      v-model='formData.email.value'
    )
  b-field.has-text-left(:label='formData.password.label', type='is-danger', message='vow')
    b-input(
      :has-counter='false',
      :maxlength='formData.password.maxLength',
      :minlength='formData.password.minLength',
      :placeholder='formData.password.placeholder',
      :use-html5-validation='false',
      key='password',
      password-reveal,
      required,
      type='password',
      v-model='formData.password.value'
    )
</template>

<script>
export default {
  name: 'AppLogin',
  data() {
    return {
      formData: {
        email: {
          label: '',
          maxLength: 320,
          minLength: 3,
          placeholder: 'john@example.com',
          value: '',
        },
        password: {
          label: '',
          maxLength: 255,
          minLength: 8,
          placeholder: '8+ characters',
          value: '',
        },
      },
    }
  },
}
</script>
