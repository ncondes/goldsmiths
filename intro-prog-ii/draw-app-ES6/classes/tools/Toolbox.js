class Toolbox {
   tools = []
   selectedTool = null

   toolbarItemClick(toolName) {
      // tools that we don't want to handle the click on our own
      const ignore = ['colours']
      if (ignore.includes(toolName)) return

      Helpers.removeBorders('.sidebar-item')

      // set the tool selected
      this.selectTool(toolName)
      // call loadPixels to make sure most recent changes are saved to pixel array
      loadPixels()
   }

   addTool(tool) {
      // check that tool has an icon and a name
      if (!tool.hasOwnProperty('icon') || !tool.hasOwnProperty('name')) {
         alert('make sure your tool has both a name and an icon')
      }
      // add tool to the tools array
      this.tools.push(tool)
      // insert the sidebar item into the html
      const sidebarItem = createDiv(tool.icon)
      // add props to the html element created
      sidebarItem.class('sidebar-item')
      sidebarItem.id(`${tool.name}-sidebar-item`)
      sidebarItem.parent('sidebar')
      // bind this to the handler click function
      const handleClick = this.toolbarItemClick.bind(this)
      sidebarItem.mouseClicked(() => handleClick(tool.name))
      // if there is no tool selected, make this tool the selected one.
      if (this.selectedTool == null) {
         this.selectTool(tool.name)
      }
   }

   selectTool(toolName) {
      // get the tool by name
      const tool = this.tools.find((tool) => tool.name === toolName)

      // unmount the option
      if (this.selectedTool != null && this.selectedTool.unselect) {
         this.selectedTool.unselect()
      }

      // select the tool
      this.selectedTool = tool
      // add css to notify to the user they clicked
      Helpers.addBorder(`${toolName}-sidebar-item`)
      // populathe the options section
      if (this.selectedTool.options) {
         this.selectedTool.options()
      }
   }
}
