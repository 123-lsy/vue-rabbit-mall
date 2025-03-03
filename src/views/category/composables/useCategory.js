import { getFirstCategoryAPI } from "@/apis/category";
import { onMounted, ref } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";

export function useCategory() {
    //获取一级分类信息以及一级分类下商品
    const categoryData = ref({})
    const route = useRoute();
    const getSecondCategory = async (id = route.params.id) => {
        const res = await getFirstCategoryAPI(id);
        categoryData.value = res.result
    }

    onMounted(() => getSecondCategory())

    //针对路由组件复用问题 路由复用问题
    onBeforeRouteUpdate((to) =>{
        getSecondCategory(to.params.id);
    })

    return { categoryData }
}


