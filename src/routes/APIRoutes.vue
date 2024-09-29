<script lang="ts" setup>
import {watch} from "vue";
import { ExpressRoute } from "../components/router";
import {useDispatch, useSelector} from "@reduxjs/vue-redux";
import {increment} from "../../public/store";
import {Request, Response} from "express";

const dispatch = useDispatch();
const count = useSelector((state: any) => state.counter.value);

watch(count, () => {
  console.log(count.value);
})

const handleAddOne = (req: Request, res: Response) => {
  dispatch(increment());
  res.send("Added one");
}
</script>

<template>
  <ExpressRoute path="/api/add-one" method="get" :function="handleAddOne" />
</template>
