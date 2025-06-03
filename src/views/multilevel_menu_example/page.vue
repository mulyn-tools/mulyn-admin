<route lang="yaml">
meta:
  title: 导航1
</route>

<script lang="ts" setup>
const tableData = ref([])
fetch(`${import.meta.env.VITE_BACKEND_URL}/playlist`).then(resp => resp.json()).then(json => {
  tableData.value = json
})
const newSongName = ref('')
const newAuthor = ref('')
const note = ref('')

function handleDelete(index: number) {
  tableData.value.splice(index, 1)
  fetch(`${import.meta.env.VITE_BACKEND_URL}/edit`, {
    method: "POST",
    body: JSON.stringify(tableData.value),
    headers: {
      "Content-Type": "application/json",
      "secret": import.meta.env.VITE_SECRET
    }
  })
}

function handleAdd(name: string, author: string, note?: string) {
  tableData.value.push({
    name, author, note
  })
  fetch(`${import.meta.env.VITE_BACKEND_URL}/edit`, {
    method: "POST",
    body: JSON.stringify(tableData.value),
    headers: {
      "Content-Type": "application/json",
      "secret": import.meta.env.VITE_SECRET
    }
  })
}
</script>

<template>
  <div>
    <FaPageMain>
      <el-input v-model="newSongName" style="width: 240px" placeholder="歌名" />
      <el-input v-model="newAuthor" style="width: 240px" placeholder="歌者" />
      <el-input v-model="note" style="width: 240px" placeholder="备注" />
      <el-button @click="handleAdd(newSongName, newAuthor, note)">
        添加
      </el-button>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="歌手" width="180">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <span style="margin-left: 10px">{{ scope.row.author }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="歌名" width="180">
          <template #default="scope">
            <el-popover effect="light" trigger="hover" placement="top" width="auto">
              <template #reference>
                {{ scope.row.name }}
              </template>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="备注" width="180">
          <template #default="scope">
            <el-popover effect="light" trigger="hover" placement="top" width="auto">
              <template #reference>
                {{ scope.row.note }}
              </template>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </FaPageMain>
  </div>
</template>
