// @ts-nocheck
import supabase from "../api/supabase";
import { writable } from "svelte/store";

/* EXAMPLE: Fetch Supabase Datas*/

export const datas = writable([]);

export const fetchSupabase = async (database, select) => {
    const { res, err } = await supabase.from(database).select(select);
    if(!err) {
            datas.set(res)
    } else {
        console.log(err)
    }
}