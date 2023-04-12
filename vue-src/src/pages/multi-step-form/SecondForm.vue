<script setup lang="ts">
/* import router*/
import {useRouter} from 'vue-router';
/* import parts*/
import {InputName, InputNameKana, InputEMail, FormGroup} from './components/form';
import {MultiStepFormLayout} from './components/layouts';

// TODO:グローバルストア => フォーム初期値

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

const onClickPrevious = async () => await router.push({name: 'entry'});
</script>
<template>
    <MultiStepFormLayout :step="2" title="2番目の画面" @submit="onSubmit" @click-previous="onClickPrevious">
        <!-- フォーム:名前 -->
        <FormGroup label="名前">
            <!-- 名前（姓） -->
            <InputName name="last_name" outer-class="col-3" validation-label="名前（姓）"/>
            <!-- 名前（名） -->
            <InputName name="first_name" outer-class="col-3 ms-4" validation-label="名前（名）"/>
        </FormGroup>
        <!-- フォーム:ふりがな -->
        <FormGroup label="ふりがな">
            <!-- ふりがな（姓） -->
            <InputNameKana name="last_name_kana" outer-class="col-3" validation-label="ふりがな（姓）"/>
            <!-- ふりがな（名） -->
            <InputNameKana name="first_name_kana" outer-class="col-3 ms-4" validation-label="ふりがな（名）"/>
        </FormGroup>
        <!-- フォーム:メアド -->
        <FormGroup>
            <InputEMail name="email" outer-class="col-3" label="メールアドレス"/>
        </FormGroup>
    </MultiStepFormLayout>
</template>
