<route lang="yaml">
meta:
  title: 导航1
</route>

<script lang="ts" setup>
interface User {
  name: string
  author: string
  note?: string
}

function handleEdit(index: number, row: User) {
  console.log(index, row)
}

function handleDelete(index: number, row: User) {
  console.log(index, row)
}

function handleAdd(name: string, author: string, note?: string) {
  console.log(name, author, note)
}

const tableData: User[] = [
  {
    name: '左边',
    author: '杨丞琳',
  },
  {
    name: '人是_',
    author: '周深',
    note: '123',
  },
]

const newSongName = ref('')
const newAuthor = ref('')
const note = ref('')
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
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
              修改
            </el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </FaPageMain>
  </div>
</template>
