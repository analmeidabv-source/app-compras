// ===============================
// INVENTORY - SUPABASE
// ===============================

async function loadInventoryFromSupabase() {
    const { data, error } = await supabaseClient
        .from("inventory")
        .select("*")
        .order("name");

    if (error) {
        console.error("Erro ao carregar inventário:", error);
        return [];
    }

    return data || [];
}

async function addInventoryProduct(product) {
    const { error } = await supabaseClient
        .from("inventory")
        .insert([product]);

    if (error) {
        console.error("Erro ao adicionar produto:", error);
        return false;
    }

    return true;
}

async function updateInventoryProduct(id, product) {
    const { error } = await supabaseClient
        .from("inventory")
        .update(product)
        .eq("id", id);

    if (error) {
        console.error("Erro ao atualizar produto:", error);
        return false;
    }

    return true;
}

async function deleteInventoryProduct(id) {
    const { error } = await supabaseClient
        .from("inventory")
        .delete()
        .eq("id", id);

    if (error) {
        console.error("Erro ao apagar produto:", error);
        return false;
    }

    return true;
}