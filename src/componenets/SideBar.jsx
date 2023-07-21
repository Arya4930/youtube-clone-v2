import { Stack } from "@mui/material";
import { categories } from '../utils/constants'

const SelectCategory = 'New'

const SideBar = () => {
  return (
    <Stack
    direction='row'
    sx={{
        overflowY:'auto',
        height: { sx: 'auto', md: '92vh'},
        flexDirection: {md: 'column'}
    }}>
      {categories.map((category) => (
        <button
        className="category-btn"
        style={{
          background: category.name === SelectCategory && '#FC1503',
          color: 'white'
        }}>
          <span style={{
            color: category.name === SelectCategory ? 'white' : 'red',
            marginRight: '15px'
          }}>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}

    </Stack>
  )
}

export default SideBar