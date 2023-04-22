<script setup lang="ts">
/* import router*/
import {useRouter} from 'vue-router';
/* import parts*/
import {MultiStepFormLayout} from './components/layouts';
import {FormGroup, InputGender, InputBirthday} from './components/form';

// ルーター
const router = useRouter();

// イベントハンドリング
/**
 * submit ハンドラー
 * @param data 正常登録値
 */
const onSubmit = async (data: object) => {
    console.log('2ページ目', data);
    // グローバルストレージ保存
    // await store.dispatch('updateForm', data);
    // 成功
    // await router.push({name: 'final'});
}

/**
 * 前へ
 */
const onClickPrevious = async () => await router.push({name: 'entry'});
</script>
<template>
    <MultiStepFormLayout :step="2" title="2番目の画面" @submit="onSubmit" @click-previous="onClickPrevious">
        <!-- フォーム:性別 -->
        <FormGroup>
            <InputGender name="gender" outer-class="col-3" label="性別" help="あてはまる内容を一つお選びください。"/>
        </FormGroup>
        <!-- フォーム:生年月日 -->
        <FormGroup>
            <InputBirthday name="birthday" outer-class="col-3" label="生年月日" />
        </FormGroup>
    </MultiStepFormLayout>
</template>
