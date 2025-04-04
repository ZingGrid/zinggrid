// Type definitions for zinggrid 2.1.2
// Project: https://github.com/ZingGrid/zinggrid
// Definitions by: Jeanette Phung <https://github.com/jeanettephung>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.3

type Upper = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" | "M" |
  "N" | "O" | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "W" | "X" | "Y" | "Z";

type Kebab<T extends string> = T extends `${infer L}${Upper}${infer R}` ?

  T extends `${L}${infer U}${R}` ? `${L}-${Lowercase<U>}${Kebab<R>}` : T : T;

type KebabKeys<T> = { [K in keyof T as K extends string ? Kebab<K> : K]: T[K] };

declare namespace ZSoft {
  interface ZingGridElementEventMap {
    'menu:click': CustomEvent;
    'grid:beforerender': CustomEvent;
    'grid:contextmenuclose': CustomEvent;
    'grid:contextmenuopen': CustomEvent;
    'grid:deselect': CustomEvent;
    'grid:hydrate': CustomEvent;
    'grid:keydown:esc': CustomEvent;
    'grid:pagechange': CustomEvent;
    'grid:pagefirst': CustomEvent;
    'grid:pagelast': CustomEvent;
    'grid:pagenext': CustomEvent;
    'grid:pageprev': CustomEvent;
    'grid:pagesizechange': CustomEvent;
    'grid:ready': CustomEvent;
    'grid:refresh': CustomEvent;
    'grid:render': CustomEvent;
    'grid:scroll': CustomEvent;
    'grid:search': CustomEvent;
    'grid:select': CustomEvent;
    'grid:selectall': CustomEvent;
    'grid:sort': CustomEvent;
    'cell:beforecopy': CustomEvent;
    'cell:beforerender': CustomEvent;
    'cell:click': CustomEvent;
    'cell:closeedit': CustomEvent;
    'cell:copy': CustomEvent;
    'cell:mouseout': CustomEvent;
    'cell:mouseover': CustomEvent;
    'cell:openedit': CustomEvent;
    'cell:paste': CustomEvent;
    'cell:rightclick': CustomEvent;
    'data:afterfetch': CustomEvent;
    'data:cell:beforechange': CustomEvent;
    'data:cell:change': CustomEvent;
    'data:load': CustomEvent;
    'data:record:beforechange': CustomEvent;
    'data:record:beforedelete': CustomEvent;
    'data:record:beforeinsert': CustomEvent;
    'data:record:change': CustomEvent;
    'data:record:delete': CustomEvent;
    'data:record:insert': CustomEvent;
    'data:record:openinsert': CustomEvent;
    'row:click': CustomEvent;
    'row:detailsclose': CustomEvent;
    'row:detailsopen': CustomEvent;
    'row:frozen': CustomEvent;
    'row:mouseout': CustomEvent;
    'row:mouseover': CustomEvent;
    'row:select': CustomEvent;
    'column:click': CustomEvent;
    'column:filter': CustomEvent;
    'column:filter:menu:close': CustomEvent;
    'column:filter:menu:open': CustomEvent;
    'column:mouseout': CustomEvent;
    'column:mouseover': CustomEvent;
    'column:move': CustomEvent;
    'column:togglevisibility': CustomEvent;
    'card:click': CustomEvent;
    'card:mouseout': CustomEvent;
    'card:mouseover': CustomEvent;
    'record:click': CustomEvent;
    'record:mouseout': CustomEvent;
    'record:mouseover': CustomEvent;
    'header:click': CustomEvent;
  }

  interface ZingGridEventHandlers {
    /**
     * @description Fires the event when custom menu item is clicked.
     */
    'onMenuClick'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event once before the grid renders.
     */
    'onGridBeforerender'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the  event when the contextmenu is closed.
     */
    'onGridContextmenuclose'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event when the contextmenu is opened.
     */
    'onGridContextmenuopen'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event when selection is deselected in the grid.
     */
    'onGridDeselect'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event when the pre-rendered grid is finished being hydrated.
     */
    'onGridHydrate'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event when the (Esc) key is pressed.
     */
    'onGridKeydownEsc'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event when a page changes in the grid.
     */
    'onGridPagechange'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event when the grid changes to the first page.
     */
    'onGridPagefirst'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event when the grid changes to the last page.
     */
    'onGridPagelast'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event when the grid changes to the next page.
     */
    'onGridPagenext'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event when the grid changes to the previous page.
     */
    'onGridPageprev'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event when the "page-size" (amount of rows displaying) changes on the grid.
     */
    'onGridPagesizechange'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the grid ready event when grid is ready.
     */
    'onGridReady'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event when the grid is refreshed through grid controls or API method "refresh()".
     */
    'onGridRefresh'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event once when grid renders.
     */
    'onGridRender'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event when scrolling occurs in grid.
     */
    'onGridScroll'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event when a the grid is searched.
     */
    'onGridSearch'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event when selection is made in the grid.
     */
    'onGridSelect'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event when selecting every cell (ctrl+a) in the grid.
     */
    'onGridSelectall'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event when a the grid is sorted
     */
    'onGridSort'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event when copying (ctrl+c) occurs in a cell before the data is saved to the clipboard.
The event handler can modify the data in ZGData.copiedValue to store in the clipboard
     */
    'onCellBeforecopy'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event before a cell is rendered.
     */
    'onCellBeforerender'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event when a click occurs to a cell.
     */
    'onCellClick'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event when the cell editor is closed.
     */
    'onCellCloseedit'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event when copying (ctrl+c) occurs in a cell.
     */
    'onCellCopy'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event when mouse is moved out of a cell.
     */
    'onCellMouseout'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event when mouse is moved over a cell.
     */
    'onCellMouseover'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event when the cell editor is opened.
     */
    'onCellOpenedit'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event when pasting (ctrl+p) occurs in a cell.
     */
    'onCellPaste'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event when right click occurs on a cell.
     */
    'onCellRightclick'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event every time data is fetched
     */
    'onDataAfterfetch'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event before a single cell value is changed.
     */
    'onDataCellBeforechange'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event after a single cell value is changed.
     */
    'onDataCellChange'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event every time a new dataset is loaded in the grid.
     */
    'onDataLoad'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event before a record (row) is changed (edited through row editor as opposed to cell editor).
     */
    'onDataRecordBeforechange'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event before a record (row) is deleted from the grid.
     */
    'onDataRecordBeforedelete'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event before a new record (row) is added to the grid.
     */
    'onDataRecordBeforeinsert'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event after a record (row) is changed (edited through row editor as opposed to cell editor).
     */
    'onDataRecordChange'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event when a record (row) is deleted from the grid.
     */
    'onDataRecordDelete'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event after a new record (row) is added to the grid.
     */
    'onDataRecordInsert'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires event when the insert dialog is opened
     */
    'onDataRecordOpeninsert'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the "row:click" and "record:click" event when a click occurs on a record (row).
     */
    'onRowClick'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires when the row details is closed
     */
    'onRowDetailsclose'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires when the row details is opened
     */
    'onRowDetailsopen'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires when the frozen row state changes
     */
    'onRowFrozen'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event when mouse is moved out a record (row).
     */
    'onRowMouseout'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event when mouse is moved over a record (row).
     */
    'onRowMouseover'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires when the row selector changes
     */
    'onRowSelect'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires event when click on a column.
     */
    'onColumnClick'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event when a column is filtered.
     */
    'onColumnFilter'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event when a filter menu is closed.
     */
    'onColumnFilterMenuClose'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event when a filter menu is opened
     */
    'onColumnFilterMenuOpen'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires event when mouseout on a column.
     */
    'onColumnMouseout'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires event when mouseover on a column.
     */
    'onColumnMouseover'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event when a column is moved to a frozen spot or within a frame
     */
    'onColumnMove'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event when a column is hidden or shown
     */
    'onColumnTogglevisibility'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the "card:click" and "record:click" event when a click occurs on a record (card).
     */
    'onCardClick'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event when mouse is moved out a record (card).
     */
    'onCardMouseout'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the event when mouse is moved over a record (card).
     */
    'onCardMouseover'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires the "row:click" and "record:click" event when a click occurs on a record (row).
     */
    'onRecordClick'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires when the mouse cursor leaves the record (row).
     */
    'onRecordMouseout'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires when the mouse cursor enter the record (row).
     */
    'onRecordMouseover'?: ((this: Window, ev: CustomEvent) => any) | null;
    /**
     * @description Fires event when click on a header cell.
     */
    'onHeaderClick'?: ((this: Window, ev: CustomEvent) => any) | null;
  }

  interface CatchAll {
    [attr: string]: any;
  }

  namespace ZingGridAttributes {
    interface ZGButton {
      /**
       * @description Sets the action of the button
       */
      action?: string;

      /**
       * @description Set to a template or a function to return true or false to set the disabled state
       * The function's callback receives rowData and zg-cell object if in a cell
       */
      customDisabled?: string;

      /**
       * @description Sets the tooltip in the case of custom buttons.  Can override the default tooltip on builtin buttons
       */
      customTooltip?: string;

      /**
       * @description Presence of attribute determines if the button is disabled or not
       */
      disabled?: boolean;

      /**
       * @description By default, action buttons have no border and custom buttons do.
       * You can force a border by setting the "[force-border]" attribute and you can force no border by setting "[force-border="disabled"]"
       */
      forceBorder?: string | boolean;

      /**
       * @description A custom function to call on button click
       */
      handler?: string;

      /**
       * @description Sets the icon for the button
       */
      icon?: string;
    }

    interface ZGCaption {
      /**
       * @description The alignment of content in the caption
       */
      align?: string;

      /**
       * @description Indicates where to position the caption
       */
      position?: string;
    }

    interface ZGCard {
      /**
       * @description Sets the custom editor
       */
      editor?: string;

      /**
       * @description Points to an external template element to be used as the template for the card's editor.
       */
      editorTemplate?: string;

      /**
       * @description The return value of the method is set as the innerHTML of "<zg-card>".  If nothing is returned,
       * it will not change the currently rendered card. The method takes the paramters "data", "domCard", and "rowObject".
       */
      renderer?: string;

      /**
       * @description Points to an external template element to be used as the template for the card's render.
       */
      rendererTemplate?: string;
    }

    interface ZGCheckbox {
      /**
       * @description Presence of attribute determines if the checkbox is checked
       */
      checked?: boolean;
    }

    interface ZGColumn {
      /**
       * @description Aligns the contents of the cell
       */
      align?: 'center' | 'left' | 'right';

      /**
       * @description If the index is an array of objects, use array-index to indicate which index of the array object to include
       */
      arrayIndex?: string;

      /**
       * @description If the index is an array, you can use array-slice to indicate which array indexes to include.
       */
      arraySlice?: string | number;

      /**
       * @description Presence of attribute forces a border on the button.  Setting to "disabled" removes the default border.
       */
      buttonBorder?: boolean | string;

      /**
       * @description The type of "word-break" style for body cells. When not set, "cell-break" style is "normal" by default.
       * If the width of a column is set, "cell-break" is "word" by default.
       */
      cellBreak?: 'all' | 'ellipsis' | 'normal' | 'word' | 'none';

      /**
       * @description The class to be set directly on "<zg-cell>" within the column. "cell-class" applied to
       * "<zg-column>" will overwrite the "cell-class" applied to "<zing-grid>".
       */
      cellClass?: string;

      /**
       * @description Sets the execution method of custom 'icon' type tooltips to either activate on hover or click of the icon
       */
      cellTooltipAction?: 'click' | 'hover';

      /**
       * @description Sets the hover delay in milliseconds before displaying the tooltip
       */
      cellTooltipDelay?: number;

      /**
       * @description Specifies the icon to use for the cell tooltip trigger icon when using the info column type
       */
      cellTooltipIcon?: string;

      /**
       * @description Sets the tooltip-position for the cell
       */
      cellTooltipPosition?: 'top' | 'left' | 'right' | 'bottom';

      /**
       * @description Gets the name of the user's custom render function, on window, to use the function's return value as the tooltip content
       */
      cellTooltipRenderer?: string;

      /**
       * @description Points to an external template element to be used as the template for the tooltip display
       */
      cellTooltipTemplate?: string;

      /**
       * @description Sets the tooltip text for the cell of the column.  Can pass this value to renderer or template if using
       */
      cellTooltipText?: string;

      /**
       * @description Sets the style to use for the tooltips.  Uses the "default" style by default.  Can set to "system" to match the tooltips used on icons throughout "<zing-grid>".
       */
      cellTooltipType?: 'default' | 'system';

      /**
       * @description When an additional HTML element is added to the renderer, as in the case of image and url,
       * "content-style" will be put into a style attribute directly on the element.
       */
      contentStyle?: string;

      /**
       * @description Sets the width of the content inside of the cell. Used on cells of column type
       * "element", "iframe", "image", or "url".
       */
      contentWidth?: string | number;

      /**
       * @description The data to display in each cell where the data value is null or undefined
       */
      defaultDisplay?: string;

      /**
       * @description Renderer for the details page of a column.
       * To use a custom renderer, the attribute should be set to the name of the function.
       * The renderer function takes in the following arguments, "value of index" (for each index), "domCell", and "cellObject".
       * The returned value of the renderer function is set as the innerHTML of the details dialog.
       */
      detailsRenderer?: string;

      /**
       * @description Points to an external template element to be used as the template for the column's details
       */
      detailsTemplate?: string;

      /**
       * @description Disables the drag state of a specific column when "column-drag" enabled on "<zing-grid>"
       */
      drag?: 'disabled';

      /**
       * @description Overrides the default editor for the column.  Can be set to a different built-in editor (based on type of column),
       * custom editor, or "false" to turn off editor.
       * If set to a custom editor, the attribute value should be set to the name of the object.
       * See "Features" page on "Editing: Custom Editor Grid" for more details on custom editor.
       */
      editor?: string | string;

      /**
       * @description Points to an external template element to be used as the template for the column's editor
       */
      editorTemplate?: string;

      /**
       * @description Overrides the grid level "filter" attribute.  Presence of attribute enables the menu on "filter" column.  Can be set to "inline", "menu", "both", or "disabled"
       */
      filter?: string | boolean;

      /**
       * @description Comma separated list of buttons to display on the filter menu
       */
      filterButtons?: string | any[];

      /**
       * @description The list of conditions to present as options in the filter menu condition select.  Use "break" to display the horizontal separator.  Use "default" to use the built in default.
       */
      filterConditions?: 'none' | 'empty' | 'notEmpty' | 'equals' | 'notEquals' | 'beginsWith' | 'endsWith' | 'contains' | 'notContains' | 'between' | 'notBetween' | 'greaterThan' | 'greaterEqualThan' | 
        'lessThan' | 'lessEqualThan' | 'before' | 'after' | 'betweenDate' | 'today' | 'yesterday' | 'tomorrow' | 'custom filter name' | 'break' | 'default' | 'trueVal' | 'falseVal';

      /**
       * @description Number of conditions to display in the filter menu on menu open
       */
      filterConditionsDisplay?: number;

      /**
       * @description Max number of conditions to display in the filter menu
       */
      filterConditionsMax?: number;

      /**
       * @description The condition to initially display on filter menu open
       */
      filterDefaultCondition?: 'none' | 'empty' | 'notEmpty' | 'equals' | 'notEquals' | 'beginsWith' | 'endsWith' | 'contains' | 'notContains' | 'between' | 'notBetween' | 'greaterThan' | 'greaterEqualThan' | 
        'lessThan' | 'lessEqualThan' | 'before' | 'after' | 'betweenDate' | 'today' | 'yesterday' | 'tomorrow' | 'custom filter name';

      /**
       * @description Sets the data field index to filter on if index itself has multiple fields.  The value set in index is the default.
       */
      filterIndex?: string;

      /**
       * @description Sets the key for server side filtering.  By default the filterKey is set to the filterIndex value.
       */
      filterKey?: string;

      /**
       * @description The areas to display in the filter menu.  Can be conditions, selectbox, or both
       */
      filterMenuAreas?: 'conditions' | 'selectbox' | 'both';

      /**
       * @description Determines if the filter comparison should be against the raw values or the rendered
       * This only applies to conditionals in the filter menu.
       * For iframe column type, it is restricted to raw values.
       * For aggregate column type, it is restricted to rendered values.
       */
      filterOn?: 'raw' | 'rendered';

      /**
       * @description Determines if the selectbox in the filter menu should display the values as raw or rendered values.
       */
      filterSelectboxDisplay?: 'raw' | 'rendered';

      /**
       * @description Action that fires the filter event from the filter menu.
       */
      filterTrigger?: 'button' | 'change';

      /**
       * @description Overrides the default filterer for the column.  Can be set to a different built-in filterer or to a custom filterer<br>
       * If set to a custom filterer, the attribute value should either be set to the object that contains: "init", "afterInit", "value", "setValue", and "triggerEvent"
       * OR it can be set to a function that will be used for the "value" method which will fire on filter change.
       * Note that the custom filterer only applies to the inline filter and not the conditions or select box options (filter menu).
       */
      filterer?: string;

      /**
       * @description The aggregate function, tokenized string, or function to evaluate for the foot cell of the column.
       * If using a function, the function takes the parameters "columnData" and "columnFieldIndex".
       */
      footCell?: 'sum' | 'avg' | 'max' | 'min' | 'count' | 'tokenized string' | 'functionName' | string;

      /**
       * @description Moves the column to the frozen panel specified
       */
      frozen?: 'left' | 'right' | string;

      /**
       * @description Includes the column to the row-group column. To enable features on grouped row columns, set attributes on "ZGColumn[type="row-group"]".
       * All other attributes on the "[group]" column(s) are ignored.
       */
      group?: boolean;

      /**
       * @description Sets a head cell on the column in the grouped row.
       */
      groupHeadCell?: 'sum' | 'avg' | 'max' | 'min' | 'count' | 'tokenized string' | 'functionName' | string;

      /**
       * @description The aggregate function to evaluate for the head cell of the column.
       * If using a function, the function takes the parameters "columnData" and "columnFieldIndex".
       */
      headCell?: 'sum' | 'avg' | 'max' | 'min' | 'count' | 'tokenized string' | 'functionName' | string;

      /**
       * @description The header name for the column.   If it is not set, the default is to format the "index" value.
       */
      header?: string;

      /**
       * @description Setting to "disabled" will turn off formatting on the header of the column.  By default, headers will
       * convert camel, dash, or kebab case to a properly spaced and capitalized string.  Or
       * set to a function name to customize formatting of header text.  The custom function takes in two parameters,
       * "index" and "headerText", and returns the formatted header text.
       */
      headerAutoFormat?: 'disabled' | 'functionName' | string;

      /**
       * @description Sets the execution method of custom 'icon' type tooltips to either activate on hover or click of the icon
       */
      headerTooltipAction?: 'click' | 'hover';

      /**
       * @description Sets the hover delay in milliseconds before displaying the header tooltip
       */
      headerTooltipDelay?: number;

      /**
       * @description Specifies the icon to use for the header tooltip trigger icon
       */
      headerTooltipIcon?: string;

      /**
       * @description Sets the header icon position in the header cells
       */
      headerTooltipIconPosition?: 'left' | 'right' | 'after-text';

      /**
       * @description Sets the tooltip icon position for the tooltip icon in the header cells
       */
      headerTooltipIconPosition?: 'left' | 'right' | 'after-text';

      /**
       * @description Sets the tooltip-position for the header cell
       */
      headerTooltipPosition?: 'top' | 'left' | 'right' | 'bottom';

      /**
       * @description Gets the name of the user's custom render function, on window, to use the function's return value as the tooltip content
       */
      headerTooltipRenderer?: string;

      /**
       * @description Points to an external template element to be used as the template for the tooltip display
       */
      headerTooltipTemplate?: string;

      /**
       * @description Sets the tooltip text for the header cell of the column.  Can pass this value to renderer or template if using
       */
      headerTooltipText?: string;

      /**
       * @description Sets what part of the header triggers the tooltip.  If set to 'icon', an info icon is added to the header.
       */
      headerTooltipTrigger?: 'text' | 'icon';

      /**
       * @description Sets the style to use for the tooltips.  Uses the "default" style by default.  Can set to "system" to match the tooltips used on icons throughout "<zing-grid>".
       */
      headerTooltipType?: 'default' | 'system';

      /**
       * @description Adds an icon next to the header text.
       */
      headerIcon?: string;

      /**
       * @description Presence of attribute hides the column
       */
      hidden?: boolean;

      /**
       * @description A single index or multiple indices (separated by comma), to associate information in the data source
       *  to a column in the grid.  Nested data keys are referenced by the member character "." (Ex. data.key).
       */
      index?: string;

      /**
       * @description Localization code used with column type "currency" and "number"
       */
      locale?: string;

      /**
       * @description The text to display in the control menu for the column.  If it is not set, it is set to the header text.
       */
      menuText?: string;

      /**
       * @description Sets the minimum width of the column in pixels
       */
      minWidth?: number;

      /**
       * @description Overrides the default renderer for the column.  Can be set to a different built-in or custom renderer.
       * To use a custom renderer, the attribute should be set to the name of the function.
       * The renderer function takes in the following arguments, "value of index" (for each index), "domCell", and "cellObject".
       * The returned value of the renderer function is set as the innerHTML of the cell.
       */
      renderer?: string;

      /**
       * @description Points to an external template element to be used as the template for the column's renderer
       */
      rendererTemplate?: string;

      /**
       * @description Indicates that the column is required to have a value on edit
       */
      required?: boolean;

      /**
       * @description Turns on column resizing for single column.  Set to "disabled" to turn off resizing on a single column.
       */
      resizable?: 'disabled';

      /**
       * @description Sets the maximum width the column can be set to when resizing
       */
      resizableMaxWidth?: number;

      /**
       * @description Sets the minimum width the column can be set to when resizing
       */
      resizableMinWidth?: number;

      /**
       * @description Modifies the default column resizable persistence.  Set to "disabled" to turn off persistence on a single column.
       */
      resizablePersistent?: boolean;

      /**
       * @description Turns off the search on a column if "search" is present on "<zing-grid>"
       */
      search?: 'disabled';

      /**
       * @description If multiple indices are set, this is the string that separates them in the display.  By default, it is a comma.
       */
      separator?: string;

      /**
       * @description Turns off the sort on a column if "sort" is present on "<zing-grid>"
       */
      sort?: 'disabled';

      /**
       * @description Presence of attribute sorts the column data in ascending order
       */
      sortAsc?: boolean;

      /**
       * @description Presence of attribute sorts the column data in descending order
       */
      sortDesc?: boolean;

      /**
       * @description Overrides default behavior for setting special sort for international data
       */
      sortIntl?: 'disabled';

      /**
       * @description Overrides the default sorter for the column.  It is also possible to override the column sorting by
       * passing in method name of sort function instead or setting to "disabled" to disable sorting.  Sorter function
       * takes in two values (a, b) and returns 1, -1, or 0 indicating if "a > b", "a < b", or "a = b".
       * Can also be set to a path in the dataset to perform the sort on.  This is useful for sorting object indices.
       */
      sorter?: string;

      /**
       * @description The type of the data stored in the column.  The column renderer/editor will behave based on the column type.
       */
      type?: 'aggregate' | 'boolean' | 'button' | 'checkbox' | 'color' | 'currency' | 'custom' | 'date' | 'duplicate' | 'editor' | 'element' | 'email' | 'emoji' | 'icon' | 'image' | 'iframe' 
        | 'number' | 'password' | 'percentage' | 'radio' | 'range' | 'remover' | 'row-group' | 'row-number' | 'select' | 'selector' | 'tel' | 'text' | 'toggle' | 'url';

      /**
       * @description Presence of attribute ignores the column in aggregation calculations
       */
      typeAggregateOmit?: boolean;

      /**
       * @description The token or aggregate value to use to display if the column is an aggregation column
       */
      typeAggregateValue?: 'sum' | 'avg' | 'max' | 'min' | 'count' | 'tokenized string' | 'functionName' | string;

      /**
       * @description Presence of attribute sets the button to be in a disabled state. Can also set to "true" or "false".
       */
      typeButtonDisabled?: boolean;

      /**
       * @description When the column type is set to "button", use "typeButtonHander" to hook up a function call to the button click.
       * Callback receives rowData, zg-cell DOM, and zg-cell object as arguments.
       */
      typeButtonHandler?: string;

      /**
       * @description When the column type is set to "button", use "typeButtonIcon" to add an icon next to the rendered button in the cell
       */
      typeButtonIcon?: string;

      /**
       * @description When the column type is set to "button", use "typeButtonLabel" to add a label to the rendered button in the cell
       */
      typeButtonLabel?: string;

      /**
       * @description When the column type is set to "button", use "typeButtonTooltip" to add a tooltip to the rendered button in the cell
       */
      typeButtonTooltip?: string;

      /**
       * @description When the column type is set to "button", use "typeButtonURL" to add a shortcut handler on button click.  The click will automatically open the url in a new window.
       */
      typeButtonUrl?: string;

      /**
       * @description When the column type is set to "checkbox", use "typeCheckboxLabel" to add a label next to the rendered checkbox in the cell
       */
      typeCheckboxLabel?: string;

      /**
       * @description Sets the color mode to configure the color picker. Choose between HSL, RGBA, and the default Hex.
       */
      typeColorMode?: string;

      /**
       * @description Disable the default color swatch UI preview with a false value.
       */
      typeColorPreview?: boolean;

      /**
       * @description By default, spaces are added into the color when in RGB or HSL mode.  Turn the spaces off by setting to "disabled"
       */
      typeColorSpaces?: string;

      /**
       * @description The currency to be used in currency formatting.
       * Currency is set using using the 3 letter currency code specified by ISO 4217 specification (https://en.wikipedia.org/wiki/ISO_4217)
       */
      typeCurrency?: string;

      /**
       * @description The tokenized formatting for a date column
       */
      typeDateFormat?: string;

      /**
       * @description Indicates if date should be displayed in FromNow format
       */
      typeDateFromNow?: boolean;

      /**
       * @description Sets the attribute of the custom-element in the column when "<zg-column>" has "type" set to "element"
       */
      typeElementAttributeName?: string;

      /**
       * @description Sets the tag to wrap content when "<zg-column>" has "type" set to "element".
       * If "type-element-attribute-name" isn't set, it will put the rendered data into the body of the element.
       * If "type-element-attribute-name" is set, it will set the attribute to the indexed value.
       */
      typeElementTagName?: string;

      /**
       * @description Set to function to convert shortcodes to emojis
       */
      typeEmojiShortcode?: string;

      /**
       * @description Presence of the attribute disables the display of the row count on the row-group column
       */
      typeGroupHideCount?: boolean;

      /**
       * @description Indicates the word to use if the count is plural or singular.  Comma separated with singular first.
       * The word can be referenced by the token "group.plural" and is used in a renderer or template.
       */
      typeGroupPlural?: string;

      /**
       * @description Sets a "square" ratio instead of the default "16:9"
       */
      typeIframeRatio?: 'square';

      /**
       * @description The alternative text used with the "image" type column
       */
      typeImageAlt?: string;

      /**
       * @description The alternative shape to mask the image
       */
      typeImageMask?: 'circle';

      /**
       * @description If the column type is "image", use the "type-image-src" attribute to set the src for the image.  The src will be the index value by default.
       */
      typeImageSrc?: string;

      /**
       * @description Indicates the exact numbers to display after the decimal
       */
      typeNumberDecimals?: number;

      /**
       * @description Set to "disabled" to turn off default number formatting
       */
      typeNumberFormatting?: 'disabled';

      /**
       * @description Indicates the maximum numbers to display after the decimal
       */
      typeNumberMaxDecimals?: number;

      /**
       * @description Indicates the minimum numbers to display after the decimal
       */
      typeNumberMinDecimals?: number;

      /**
       * @description When the column type is set to "radio", use "typeRadioOptions" to add rendered radio options in the cell.
       * Can also set as array of name/value pairs where the name is displayed for the given value
       */
      typeRadioOptions?: any[] | string;

      /**
       * @description Maximum value for the input box. Used with the "range" type column in edit mode.
       */
      typeRangeMax?: number;

      /**
       * @description Minimum value for the input box.  Used with "range" type column in edit mode.
       */
      typeRangeMin?: number;

      /**
       * @description Specifies the step between each legal value for the input box.  Used with "range" type column in edit mode.
       */
      typeRangeStep?: number;

      /**
       * @description The default value of a new record.  The select box in the create record will default to the specified value.
       */
      typeSelectDefaultValue?: string;

      /**
       * @description In edit mode, presence of attribute allows column type "select" to have multiple selections, instead of the default
       * of a single selection
       */
      typeSelectMultiple?: boolean;

      /**
       * @description To set the options for the select box for a "select" column when "editor" is enabled on "<zing-grid>".
       * Can also set as array of name/value pairs where the name is displayed for the given value
       */
      typeSelectOptions?: string | any[];

      /**
       * @description Keeps the selected rows selected even on page change.  This means that rows can be selected and not on the current page.
       */
      typeSelectorPagePersist?: boolean;

      /**
       * @description When the column type is set to "toggle", use "typeToggleOptions" to set the list of options for the display.
       */
      typeToggleOptions?: any[];

      /**
       * @description When the column type is set, the render and value will be the same.  This prevents the default creating of true/false for toggles.
       */
      typeToggleRenderValue?: boolean;

      /**
       * @description If the column type is "url", use this attribute to reference any "<zg-icon>" within the library
       * to replace the link text with this icon.
       */
      typeUrlIcon?: 'link' | 'outsidearrow';

      /**
       * @description If the column type is "url", use the "type-url-src" attribute to set the src for the link.  The link will be the index value by default.
       */
      typeUrlSrc?: string;

      /**
       * @description If the column type is "url", use this attribute to set the target window of the click.
       * Uses the same values as HTML "<a>" "[target]" attribute.  "_blank" by default
       */
      typeUrlTarget?: string;

      /**
       * @description If the column type is "url", use the "type-url-text" attribute to set the text displayed for the link.
       */
      typeUrlText?: string;

      /**
       * @description Sets the validation error message for the column.  Overrides any other settings.
       */
      validationErrorMessage?: string;

      /**
       * @description Sets the validation required message for the column.  Overrides any other settings.
       */
      validationRequiredMessage?: string;

      /**
       * @description Sets the validation method for the column.  Overrides the default for the column type
       */
      validator?: string | string;

      /**
       * @description Used in the case of automatically removing columns on resize.  Columns without a "visibility-priority" never
       * gets removed. The rest of the columns are removed from highest "visibility-priority" value to the lowest.
       */
      visibilityPriority?: number;

      /**
       * @description Sets the width of the column.
       */
      width?: 'fit' | 'fitheader' | 'fitcontent' | 'stretch' | '10%' | '150px' | '150' | 'min-content' | 'max-content' | string | number;
    }

    interface ZGData {
      /**
       * @description Adapter is a shortcut to set known options for specific third party datasets.  Currently supports "graphql" and  "firebase".
       * Developers could register their own custom adapters.  For more information on custom adapters, visit Guides > ZingGrid Object > registerAdapter().
       */
      adapter?: string;

      /**
       * @description Data for the grid presented as an array or object.  If set as an attribute value, the
       * data needs to be in JSON format.
       */
      data?: any;

      /**
       * @description In the case of non-key based objects, the idKey can be set to indicate the id to send back to the datasource on CRUD commands.
       * For example, if the READ URL was https://zinggrid-named.firebaseio.com/ then the UPDATE would be https://zinggrid-named.firebaseio.com/VALUE_OF_IDKEY.
       */
      idKey?: string;

      /**
       * @description Used to set "<zg-param>", the configuration data for "<zg-data>".  This should never be used directly as an attribute and
       * is meant for object instantiation and for setting in JavaScript.
       */
      options?: any;

      /**
       * @description Specifies the absolute or relative URL to fetch data from to populate the grid
       */
      src?: string;
    }

    interface ZGDialog {
      /**
       * @description Callback method to call on custom dialog when the dialog's "cancel"
       * button is clicked
       */
      cancel?: string;

      /**
       * @description Callback method to call on custom dialog when the dialog's "confirm"
       * button is clicked
       */
      confirm?: string;

      /**
       * @description Sets the dialog's header 'label' text
       */
      label?: string;

      /**
       * @description The presence of the specification-standard "open" attribute designates whether the dialog is shown or hidden
       */
      open?: string;
    }

    interface ZGIcon {
      /**
       * @description Sets the icon type of "<zg-icon>"
       */
      name?: string;
    }

    interface ZGInput {
      /**
       * @description The built-in behavior and display of the input.  Gets and sets the associated grid property.
       */
      action?: string;

      /**
       * @description The type of the input if not using a built-in action
       */
      type?: string;

      /**
       * @description The value of the input
       */
      value?: string;
    }

    interface ZGMenu {
      /**
       * @description Presence of attribute replaces the default context menu with a custom menu.
       * If "replace" is not set, the custom menu will be appended to the end of the default menu.
       */
      replace?: boolean;
    }

    interface ZGPager {
      /**
       * @description Sets the number of records or rows to display per page
       */
      pageSize?: number;

      /**
       * @description Sets the number of cards to display per page when in card mode
       */
      pageSizeCard?: number;

      /**
       * @description Sets the number of rows to display per page when in row mode
       */
      pageSizeRow?: number;

      /**
       * @description Determines which type of pagination to use, input or buttons
       */
      pagerType?: string;

      /**
       * @description Determines max number of page buttons to display.  Default is 5.
       */
      pagerButtonLimit?: number;

      /**
       * @description Indicates where to position the pager
       */
      position?: string;

      /**
       * @description Sets the options for page size in "zg-option-list"
       */
      sizeOptions?: string;
    }

    interface ZGParam {
      /**
       * @description Name of parameter
       */
      name?: string;

      /**
       * @description The value for given data key.  If the value is an object, format as JSON encoded version of string.
       */
      value?: string;
    }

    interface ZGSelect {
      /**
       * @description The actions of the select dropdown. The current option is pagesize.
       */
      action?: string;

      /**
       * @description The comma separated string list of options to go into the Select Element
       */
      options?: string;

      /**
       * @description The default value of the select dropdown
       */
      value?: string;
    }

    interface ZGSource {
      /**
       * @description Indicates where to position the source
       */
      position?: string;
    }

    interface ZGText {
      /**
       * @description Specifies what value to generate in text field.  Current built-in options are
       * pager-related information.
       */
      value?: string;
    }

    interface ZingGrid {
      /**
       * @description Adds aggregate column and sets the type-aggregate-value to the specified value
       */
      aggregate?: string;

      /**
       * @description Aligns the contents of the grid's text
       */
      align?: 'center' | 'left' | 'right';

      /**
       * @description Presence of attribute indicates the grid allows batch editing and displays the controls.
       * In batch edit mode, changes can be made to cells that do not have edit disabled or are not a part of the "recordkey" column.
       */
      batchEdit?: boolean;

      /**
       * @description Sets the message to display when making batch edits.
       * Can use the following tokens: [[changes]], [[deleted]], [[fieldsEdited]], [[inserted]], [[modified]], [[recordsEdited]].
       * Can append 'Message' to any of the above for a string description.
       */
      batchEditStatus?: string;

      /**
       * @description Turns off the tooltips on all buttons in the grid
       */
      buttonTooltipDisabled?: boolean;

      /**
       * @description The caption for the grid
       */
      caption?: string;

      /**
       * @description Specifies the defined "<zg-card>" of the grid.  More appropriate to use "<zg-card>" in most cases or set the property programmatically.
       */
      card?: any;

      /**
       * @description The type of "word-break" style for body cells. When not set, "cell-break" style is "normal" by default.
       * If the width of a column is set, "cell-break" is "word" by default.
       * To overwrite "cell-break" for cells in a specific column, set "cell-break" for that column.
       */
      cellBreak?: 'all' | 'ellipsis' | 'normal' | 'word';

      /**
       * @description Adds a class to each "<zg-cell>" in the grid. This attribute can be applied to both
       * "<zing-grid>" or "<zg-column>". If the attribute is applied to both, "<zg-column>"'s "cell-class" overwrites "<zing-grid>"'s "cell-class".
       * To set a class conditionally, set "cell-class" to the name of the function, which takes in the arguments: "cellData", "domContainer", "cellObject".
       */
      cellClass?: string;

      /**
       * @description Turns cell editing on or off. Automatically turned on when setting "editor" or "editor-controls".
       */
      cellEditor?: 'disabled' | boolean;

      /**
       * @description Turns off keyboard nav cell focus if set to disabled
       */
      cellFocus?: 'disabled';

      /**
       * @description Sets the execution method of custom 'icon' type tooltips to either activate on hover or click of the icon
       */
      cellTooltipAction?: 'click' | 'hover';

      /**
       * @description Sets the hover delay in milliseconds before displaying the tooltip. If delay is not specified,
       * it is 1000ms on cell tooltips without an icon and 0ms on cell tooltips with an icon.
       */
      cellTooltipDelay?: number;

      /**
       * @description Specifies the icon to use for the info column types
       */
      cellTooltipIcon?: string;

      /**
       * @description Sets the tooltip-position for the cell
       */
      cellTooltipPosition?: 'top' | 'left' | 'right' | 'bottom';

      /**
       * @description Gets the name of the user's custom render function, on window, to use the function's return value as the tooltip content
       */
      cellTooltipRenderer?: string;

      /**
       * @description Points to an external template element to be used as the template for the tooltip display
       */
      cellTooltipTemplate?: string;

      /**
       * @description Sets the style to use for the tooltips.  Uses the "default" style by default.  Can set to "system" to match the tooltips used on icons throughout "<zing-grid>".
       */
      cellTooltipType?: 'default' | 'system';

      /**
       * @description Adds a class to each "<zg-cell>" in targeted "<zg-column>". To
       * apply a class conditionally, set the value to the name of the function to run
       * on each cell value. The function takes the parameters "fieldIndex", "domContainer",
       * and "colObject", and returns a string which is the class name to apply.
       */
      colClass?: string;

      /**
       * @description Enables column dragging
       */
      columnDrag?: boolean;

      /**
       * @description Specifies the action of dragging allowed.  By default, if "column-drag" is
       * enabled then "column-drag-action" is set ""both"".  This property will turn on column-drag if not already set.
       */
      columnDragAction?: 'reorder' | 'hide' | 'both';

      /**
       * @description Presence of attribute turns on column resizing for all columns.
       * This excludes internal column types (), which requires setting ZGColumn[resizable] on the column.
       */
      columnResizable?: boolean;

      /**
       * @description Sets the maximum width columns can be set to when resizing
       */
      columnResizableMaxWidth?: number;

      /**
       * @description Sets the minimum width columns can be set to when resizing
       */
      columnResizableMinWidth?: number;

      /**
       * @description Presence of attribute displays column resizing for all columns without hover
       */
      columnResizablePersistent?: boolean;

      /**
       * @description Sets the width each of the columns
       */
      columnWidth?: 'fit' | 'fitheader' | 'fitcontent' | 'stretch' | '10%' | '150px' | '150' | string | number;

      /**
       * @description Specifies the columns of the grid.  More appropriate to use "<zg-column>" in most cases or set the property programmatically.
       */
      columns?: ZGColumn[];

      /**
       * @description Presence of attribute turns on the menu to show and hide columns
       */
      columnsControl?: boolean;

      /**
       * @description Augments internal themes to a compact mode
       */
      compact?: boolean;

      /**
       * @description Used to set multiple grid properties at once.  This should never be used directly.
       * This is meant for object instantiation.
       */
      config?: any;

      /**
       * @description Turns off delete confirmation if set to disable
       */
      confirmDelete?: 'disabled';

      /**
       * @description Sets which confirmation dialogs to display on batch editing and deleting
       */
      confirmations?: 'batch-edit' | 'batch-edit-discard' | 'delete' | 'disabled' | 'all';

      /**
       * @description Enables the default "<zing-grid>" context menu or set to the id name of a custom "<zg-menu>".  If
       * set to a custom menu and "<zg-menu>" has the "replace" attribute present, then the custom menu will replace the context menu.
       * Otherwise the contents of the custom menu is appended to the end of context menu.
       * Can also set to ""browser"" to use the browser's built in context-menu
       * Note that the ""browser"" context-menu cannot be used together with a custom static-menu.
       */
      contextMenu?: string | boolean;

      /**
       * @description Sets the create editor to modal (default) or inline.
       */
      creator?: 'inline' | boolean;

      /**
       * @description Data for the grid presented as an array or object
       */
      data?: any;

      /**
       * @description The data to display in each cell where the data value is null or undefined
       */
      defaultDisplay?: string;

      /**
       * @description Sets "<zg-dialog>" to display dialog and mask within the grid dimensions instead of the whole screen
       */
      dialog?: boolean;

      /**
       * @description The HTML standard direction to indicate direction of grid's columns and text
       */
      dir?: string;

      /**
       * @description Turns on the grid editor.  Enables single cell editing via double click.
       * Sets the editor to inline (default) or modal.
       */
      editor?: 'modal' | boolean;

      /**
       * @description Adds columns for the editor controls.  If it is added, default is "all".
       */
      editorControls?: 'editor' | 'remover' | 'creator' | 'all' | boolean;

      /**
       * @description Comma separated list of indexes to turn off editor functionality on.  Mimes the functionality of ["editor=disabled"] on "<zg-column>"
       */
      editorDisabledFields?: 'fieldIndex' | boolean;

      /**
       * @description Enables filtering for all columns.  Can be turned on/off individually via column.  Can be set to "inline" or "menu"  Default is "menu"
       */
      filter?: string | boolean;

      /**
       * @description Comma separated list of buttons to display in the specified order on the filter menu
       */
      filterButtons?: string | any[];

      /**
       * @description The list of conditions to present as options in the filter menu condition select.  Use "break" to display the horizontal separator.  Use "default" to use the built in default.
       */
      filterConditions?: 'none' | 'empty' | 'notEmpty' | 'equals' | 'notEquals' | 'beginsWith' | 'endsWith' | 'contains' | 'notContains' | 'between' | 'notBetween' | 'greaterThan' | 'greaterEqualThan' | 
        'lessThan' | 'lessEqualThan' | 'before' | 'after' | 'betweenDate' | 'today' | 'yesterday' | 'tomorrow' | 'custom filter name' | 'break' | 'default' | 'trueVal' | 'falseVal';

      /**
       * @description Number of conditions to display in the filter menu on menu open
       */
      filterConditionsDisplay?: number;

      /**
       * @description Max number of conditions to display in the filter menu
       */
      filterConditionsMax?: number;

      /**
       * @description The condition to initially display on filter menu open
       */
      filterDefaultCondition?: 'none' | 'empty' | 'notEmpty' | 'equals' | 'notEquals' | 'beginsWith' | 'endsWith' | 'contains' | 'notContains' | 'between' | 'notBetween' | 'greaterThan' | 'greaterEqualThan' | 
        'lessThan' | 'lessEqualThan' | 'before' | 'after' | 'betweenDate' | 'today' | 'yesterday' | 'tomorrow' | 'custom filter name';

      /**
       * @description The areas to display in the filter menu.  Can be conditions, selectbox, or both
       */
      filterMenuAreas?: 'conditions' | 'selectbox' | 'both';

      /**
       * @description Determines if the filter comparison should be against the raw values or the rendered.
       * This only applies to conditionals in the filter menu.
       * For iframe column type, it is restricted to raw values.
       * For aggregate column type, it is restricted to rendered values.
       */
      filterOn?: 'raw' | 'rendered';

      /**
       * @description Determines if the selectbox in the filter menu should display the values as raw or rendered values.
       */
      filterSelectboxDisplay?: 'raw' | 'rendered';

      /**
       * @description Action that fires the filter event from the filter menu.
       */
      filterTrigger?: 'button' | 'change';

      /**
       * @description Adds a class to each "<zg-cell>" in the "<zg-foot>". To
       * apply a class conditionally, set the value to the name of the function to run
       * on each cell value. The function takes the parameters "fieldIndex", "domContainer",
       * and "colObject", and returns a string which is the class name to apply.
       */
      footClass?: string;

      /**
       * @description Sets the number of columns to freeze to the left
       */
      frozenColumnsLeft?: number;

      /**
       * @description Sets the number of columns to freeze to the right
       */
      frozenColumnsRight?: number;

      /**
       * @description Adds a class to each "<zg-row>" element. To
       * apply a class conditionally, set the value to the name of the function to run
       * on each cell value. The function takes the parameters "data", "rowIndex" (1-based),
       *  "domRow", and "rowObject", "rowParent", and returns a string which is the class name to apply.
       */
      frozenRowClass?: string;

      /**
       * @description Sets the number of rows to freeze to the bottom
       */
      frozenRowsBottom?: number;

      /**
       * @description Sets the number of rows to freeze to the top
       */
      frozenRowsTop?: number;

      /**
       * @description Sets vertical, horizontal or both grid lines to the grid
       */
      gridlines?: 'both' | 'horz' | 'horizontal' | 'vert' | 'vertical';

      /**
       * @description Sets the index fields to group on.
       */
      groupBy?: string;

      /**
       * @description Adds a class to each "<zg-cell>" in the "<zg-head>". To
       * apply a class conditionally, set the value to the name of the function to run
       * on each cell value. The function takes the parameters "fieldIndex", "domContainer",
       * and "colObject", and returns a string which is the class name to apply.
       */
      headClass?: string;

      /**
       * @description Converts camel, dash, and kebab case to properly spaced and capitalized typography.
       * Setting to "disabled" will turn off formatting on headers.  Set to a function name to customize formatting of headers.
       */
      headerAutoFormat?: string;

      /**
       * @description Hides any header rows
       */
      headerRowHide?: string;

      /**
       * @description Sets the execution method of custom 'icon' type tooltips to either activate on hover or click of the icon
       */
      headerTooltipAction?: 'click' | 'hover';

      /**
       * @description Sets the hover delay in milliseconds before displaying the header tooltip
       */
      headerTooltipDelay?: number;

      /**
       * @description Specifies the icon to use for the header tooltip trigger icon
       */
      headerTooltipIcon?: string;

      /**
       * @description Sets the tooltip icon position for the tooltip icon in the header cells
       */
      headerTooltipIconPosition?: 'left' | 'right' | 'after-text';

      /**
       * @description Sets the tooltip-position for the header cell
       */
      headerTooltipPosition?: 'top' | 'left' | 'right' | 'bottom';

      /**
       * @description Gets the name of the user's custom render function, on window, to use the function's return value as the tooltip content
       */
      headerTooltipRenderer?: string;

      /**
       * @description Points to an external template element to be used as the template for the tooltip display
       */
      headerTooltipTemplate?: string;

      /**
       * @description Sets what part of the header triggers the tooltip.  If set to 'icon', an info icon is added to the header.
       */
      headerTooltipTrigger?: 'text' | 'icon';

      /**
       * @description Sets the style to use for the tooltips.  Uses the "default" style by default.  Can set to "system" to match the tooltips used on icons throughout "<zing-grid>".
       */
      headerTooltipType?: 'default' | 'system';

      /**
       * @description Sets the height of the grid.  If the height is less than the size of the content, scrolling is added
       * to grid body.
       */
      height?: string | number;

      /**
       * @description Allows the user to change the grid icon set to an allowed 3rd-party type (e.g., Font-Awesome).
       * To use a custom icon set, the icon set must first be registered.
       */
      iconSet?: string;

      /**
       * @description Sets the language to use for the grid
       */
      lang?: string;

      /**
       * @description Sets the grid layout to be either "card" or "row" and adds "<zg-layout-controls>" to the grid.
       * The default is based on the size of the user's screen, unless "layout" is set.
       */
      layout?: 'card' | 'row';

      /**
       * @description When "layout" is set, by default "layout-controls" is enabled.
       * To hide, set "layout-controls" to "disabled".  Presence of this attribute will enable
       * "<zg-layout-controls>" even if "layout" is not set.
       */
      layoutControls?: 'disabled' | boolean;

      /**
       * @description Presence of attribute adds loading state to grid, which triggers "<zg-load-mask>" to show.
       * This attribute allows styling the height of the grid (via CSS) before the data has loaded in the grid.
       */
      loading?: boolean;

      /**
       * @description Sets the text to display in the "<zg-load-mask>" on data load
       */
      loadingText?: string;

      /**
       * @description Set "loadmask="disabled"" to prevent the "<zg-load-mask>" from showing on data load.
       */
      loadmask?: 'disabled';

      /**
       * @description Indicates separator that should be used for nested headers and data paths.  By default, the '.' is used: 'fullName.first'
       * Setting to "disabled" will turn off parsing for nested headers and will not look at pathing for data
       */
      nestedDataSeparator?: string;

      /**
       * @description Sets the message that appears in the "<zg-no-data>" element when there are no records
       */
      noData?: string;

      /**
       * @description Sets the number of records or rows to display per page. Can be set only if "pager" is set.
       */
      pageSize?: number;

      /**
       * @description Sets the number of cards to display per page when in card mode. Can be set only if "pager" is set.
       */
      pageSizeCard?: number;

      /**
       * @description Sets the options for page size in "zg-option-list". Can be set only if "pager" is set.
       */
      pageSizeOptions?: string;

      /**
       * @description Sets the number of rows to display per page when in row mode. Can be set only if "pager" is set.
       */
      pageSizeRow?: number;

      /**
       * @description Adds pagination functionality and controls to the grid
       */
      pager?: boolean;

      /**
       * @description Determines max number of page buttons to display.  Default is 5.
       */
      pagerButtonLimit?: number;

      /**
       * @description Sets pager position. Note: "pager" attribute or "<zg-pager>" must be present in
       * order to position pager.
       */
      pagerPosition?: 'top' | 'bottom';

      /**
       * @description Determines which type of pagination to use, input or buttons
       */
      pagerType?: 'button-text' | 'button-arrows';

      /**
       * @description Name/Value pairs of "<zg-param>" values.  More appropriate to use "<zg-param>" in most cases.
       */
      params?: any;

      /**
       * @description The ID to use as the key in storing the state.  Each grid should have a unique ID or else the state data
       * will be shared across grids.
       */
      preserveStateId?: string;

      /**
       * @description The method to call when state is ready to be retrieved.  Must also set preserveStateSave and preserveStateId
       */
      preserveStateLoad?: string;

      /**
       * @description Comma separated list of features to save in state preservation.
       * Options are 'columnfrozen', 'columnposition', 'columnvisibility', 'columnwidth', 'filter', 'rowgroup', 'layout', 'page', 'pagesize', 'rowfrozen', 'rowgroup', 'rowselector', 'search', 'selector', 'sort'
       * NOTE:  If columnfrozen is set, then columnposition will implicitly be set as well
       */
      preserveStateOptions?: string;

      /**
       * @description The method to call when state is ready to be saved.  Must also set preserveStateLoad and preserveStateId.
       */
      preserveStateSave?: string;

      /**
       * @description Sets the total record count.  Useful for "loadByPage" when the response packet
       * does not return total count of records.
       */
      recordCount?: number;

      /**
       * @description Adds the duplicate control to the end of the row before the edit controls
       */
      recordDuplicate?: boolean;

      /**
       * @description Adds the record key column to the grid.  If set to a string, the string is the header text.
       */
      recordKey?: string | boolean;

      /**
       * @description Adds a class to each "<zg-row>" element. To
       * apply a class conditionally, set the value to the name of the function to run
       * on each cell value. The function takes the parameters "data", "rowIndex" (1-based),
       *  "domRow", and "rowObject", "rowParent", "bodyRowIndex" (1 based), and returns a string which is the class name to apply.
       */
      rowClass?: string;

      /**
       * @description Renderer for the row details component
       * To use a custom renderer, the attribute should be set to the name of the function.
       * The renderer function takes in the following arguments, "recordData", "domRowDetails", and "rowObject"
       * The returned value of the renderer function is set as the innerHTML of the zg-row-details component.
       */
      rowDetailsRenderer?: string;

      /**
       * @description Points to an external template element to be used as the template for the row's details
       */
      rowDetailsTemplate?: string;

      /**
       * @description Sets the height of each data row.  By default, the body row height is set to 'auto' where it will auto fit the content.
       * If you wish to apply the height to rows besides data row, specify with the "[rowHeightScope]" attribute.
       */
      rowHeight?: string | number;

      /**
       * @description If "[rowHeight]"  is set, it specifies which rows to apply row height to.
       * Choices are "data", "headers, and "all".  Can combine with comma separated list
       */
      rowHeightScope?: string;

      /**
       * @description Adds "selector" type column to the rows as the first column
       */
      rowSelector?: boolean;

      /**
       * @description Turns on the search feature and adds "<zg-search>" to the grid.
       * The search button appears in the caption header.
       */
      search?: boolean;

      /**
       * @description Turns on the selector feature on the grid and adds
       * "<zg-selector-mask>" to the grid
       */
      selector?: boolean;

      /**
       * @description Indicates that the grid was completely rendered on the server and embedded in the page
       */
      serverRendered?: boolean;

      /**
       * @description Enables sorting on all columns.  It is possible to disable specific columns
       * via the column's object or setting "sort="disabled"" to specified columns.
       */
      sort?: boolean;

      /**
       * @description Overrides default behavior for international sorting.  Turn off international sorting with "sort-intl="disabled"".
       */
      sortIntl?: 'disabled';

      /**
       * @description Override the column sorting by passing in method name of sort function instead.  Sorter function
       * takes in two values (a, b) and returns 1, -1, or 0 indicating if "a > b", "a < b", or "a = b".
       */
      sorter?: string;

      /**
       * @description Defines the source of the data in the grid. Adds the "<zg-source>" element.
       */
      source?: string;

      /**
       * @description Specifies the absolute or relative URL to fetch data from to populate the grid
       */
      src?: string;

      /**
       * @description Adds a display button that launches the contextmenu.  If
       * set to a custom menu and "<zg-menu>" has the "replace" attribute present, then the custom menu will replace the context-menu.
       * Otherwise the contents of the custom menu is appended to the end of context menu.
       * Note that custom static-menu cannot not be used together with a ""browser"" context-menu.
       */
      staticMenu?: boolean;

      /**
       * @description Changes the duration a status message will remain visible until it automatically closes (in milliseconds)
       */
      statusDelay?: number;

      /**
       * @description Prevents status messages from automatically closing after a delay
       */
      statusPersist?: boolean;

      /**
       * @description Positions the status message in one of nine positions relative to the grid
       */
      statusPosition?: 'top left' | 'center left' | 'bottom left' | 'top center' | 'center' | 'bottom center' | 'top right' | 'center right' | 'bottom right' | 'bar';

      /**
       * @description Defines the regex expression for closing data binding
       */
      templateEndDelimiter?: string;

      /**
       * @description Defines the regex expression for starting data binding
       */
      templateStartDelimiter?: string;

      /**
       * @description Sets the theme of the grid.  Built-in themes are specified by keyword, but custom theme
       * names are also accepted by setting a URL path to your custom css theme file.  For custom themes, on load set "theme"
       * to the path to the custom theme file.  After, set to theme name to switch themes.
       */
      theme?: 'android' | 'black' | 'default' | 'dark' | 'ios' | 'urlToThemeFile' | 'customThemeName' | string;

      /**
       * @description If there is a selector column, it maintains selection between pages.  This means that rows can be selected and not on the current page.
       */
      typeSelectorPagePersist?: boolean;

      /**
       * @description Sets the default validation error message
       */
      validationErrorMessage?: string;

      /**
       * @description Sets the default validation required message
       */
      validationRequiredMessage?: string;

      /**
       * @description Internal attribute.  Should not be set.
       */
      viewport?: string;

      /**
       * @description Keeps current value of "viewport" and freezes the breakpoint
       */
      viewportPause?: boolean;

      /**
       * @description Removes "viewport" attribute, disabling viewport resizing
       */
      viewportStop?: boolean;

      /**
       * @description Sets custom "viewport" breakpoints (value string-object must be valid JSON).
       * NOTE: If you don't set "mobile", the grid won't auto-set card or row mode.
       */
      viewportTypes?: string;

      /**
       * @description Sets the width of the grid.  If the width is less than the size of the content, scroll is added to "<zg-body>".
       */
      width?: string | number;

      /**
       * @description Presence of attribute adds the classes, "zebra-1" and "zebra-2", alternating on "<zg-row>" elements.  Setting to a
       * list of class names will assign classes in sequential order.  For conditional zebra classes, "zebra" also accepts name of function that
       * returns a class name to use for zebra striping.
       */
      zebra?: string;
    }
  }

  type ZingGridConfig = ZingGridAttributes.ZingGrid;

  interface NonoptionalAttributes {
    /**
     * @description Presence of attribute hides the column
     */
    hidden: boolean;
    /**
     * @description The HTML standard direction to indicate direction of grid's columns and text
     */
    dir: string;
    /**
     * @description Sets the language to use for the grid
     */
    lang: string;
  }

  interface ZGBatchEdit extends CatchAll, HTMLElement {}
  interface ZGBody extends CatchAll, HTMLElement {}
  interface ZGButton extends ZingGridAttributes.ZGButton, CatchAll, HTMLElement {}
  interface ZGCaption extends ZingGridAttributes.ZGCaption, CatchAll, HTMLElement {}
  interface ZGCard extends ZingGridAttributes.ZGCard, CatchAll, HTMLElement {}
  interface ZGCell extends CatchAll, HTMLElement {}
  interface ZGCellOverflow extends CatchAll, HTMLElement {}
  interface ZGCheckbox extends ZingGridAttributes.ZGCheckbox, CatchAll, HTMLElement {}
  interface ZGColgroup extends CatchAll, HTMLElement {}
  interface ZGColumn extends NonoptionalAttributes, Omit<ZingGridAttributes.ZGColumn, 'accessKey'
    | 'accessKeyLabel' | 'anchorElement' | 'attachInternals' | 'attributeStyleMap' | 'autocapitalize' | 'autocorrect' | 'autofocus'
    | 'beforetoggle_event' | 'blur' | 'change_event' | 'click' | 'command_event' | 'contentEditable' | 'dataset'
    | 'dir' | 'drag_event' | 'dragend_event' | 'dragenter_event' | 'dragexit_event' | 'draggable' | 'dragleave_event'
    | 'dragover_event' | 'dragstart_event' | 'drop_event' | 'editContext' | 'enterKeyHint' | 'error_event' | 'focus'
    | 'hidden' | 'hidePopover' | 'inert' | 'innerText' | 'inputMode' | 'isContentEditable' | 'lang'
    | 'load_event' | 'nonce' | 'offsetHeight' | 'offsetLeft' | 'offsetParent' | 'offsetTop' | 'offsetWidth'
    | 'outerText' | 'popover' | 'showPopover' | 'spellcheck' | 'style' | 'tabIndex' | 'title'
    | 'togglePopover' | 'toggle_event' | 'translate' | 'virtualKeyboardPolicy' | 'writingSuggestions'>, CatchAll, HTMLElement {}
  interface ZGColumnResize extends CatchAll, HTMLElement {}
  interface ZGControlBar extends CatchAll, HTMLElement {}
  interface ZGData extends ZingGridAttributes.ZGData, CatchAll, HTMLElement {}
  interface ZGDialog extends ZingGridAttributes.ZGDialog, CatchAll, HTMLElement {}
  interface ZGEditorRow extends CatchAll, HTMLElement {}
  interface ZGFilter extends CatchAll, HTMLElement {}
  interface ZGFilterMenu extends CatchAll, HTMLElement {}
  interface ZGFocus extends CatchAll, HTMLElement {}
  interface ZGFoot extends CatchAll, HTMLElement {}
  interface ZGFooter extends CatchAll, HTMLElement {}
  interface ZGFrozenColgroup extends CatchAll, HTMLElement {}
  interface ZGHead extends CatchAll, HTMLElement {}
  interface ZGHeadCell extends CatchAll, HTMLElement {}
  interface ZGHeader extends CatchAll, HTMLElement {}
  interface ZGIcon extends ZingGridAttributes.ZGIcon, CatchAll, HTMLElement {}
  interface ZGInput extends ZingGridAttributes.ZGInput, CatchAll, HTMLElement {}
  interface ZGLayoutControls extends CatchAll, HTMLElement {}
  interface ZGLoadMask extends CatchAll, HTMLElement {}
  interface ZGMenu extends ZingGridAttributes.ZGMenu, CatchAll, HTMLElement {}
  interface ZGMenuGroup extends CatchAll, HTMLElement {}
  interface ZGMenuItem extends CatchAll, HTMLElement {}
  interface ZGNoData extends CatchAll, HTMLElement {}
  interface ZGOptionList extends CatchAll, HTMLElement {}
  interface ZGPager extends ZingGridAttributes.ZGPager, CatchAll, HTMLElement {}
  interface ZGParam extends ZingGridAttributes.ZGParam, CatchAll, HTMLElement {}
  interface ZGRow extends CatchAll, HTMLElement {}
  interface ZGRowDetails extends CatchAll, HTMLElement {}
  interface ZGSearch extends CatchAll, HTMLElement {}
  interface ZGSelect extends ZingGridAttributes.ZGSelect, CatchAll, HTMLElement {}
  interface ZGSelectorMask extends CatchAll, HTMLElement {}
  interface ZGSeparator extends CatchAll, HTMLElement {}
  interface ZGSource extends ZingGridAttributes.ZGSource, CatchAll, HTMLElement {}
  interface ZGStatus extends CatchAll, HTMLElement {}
  interface ZGTable extends CatchAll, HTMLElement {}
  interface ZGText extends ZingGridAttributes.ZGText, CatchAll, HTMLElement {}
  interface ZGTooltip extends CatchAll, HTMLElement {}
  class ZingGrid {
    constructor(config: ZingGridConfig, ref: HTMLElement | Element);
    constructor(ref: HTMLElement | Element, config: ZingGridConfig);
    addEventListener<K extends keyof ZingGridElementEventMap>(type: K, listener: (this: ZingGrid, ev: ZingGridElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: ZingGrid, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ZingGridElementEventMap>(type: K, listener: (this: ZingGrid, ev: ZingGridElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: ZingGrid, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;

    // ZGDialog
    /**
     * @description Closes currently opened dialogs
     */
    closeDialog: () => ZingGrid;

    /**
     * @description Customizes the user's dialog
     * @param type The type of dialog to customize.  If you set as null, the config will be applied to all dialogs.
     * Options are: record-create, record-delete, record-info, record-update, view-error, view-info, view-success, view-warn, zg-version
     * @param config Options for the data retrieval.  Options are:
     * cancel (text for the cancel button), confirm (text for the confirm button),
     * title: (title to display on the dialog)
     */
    customizeDialog: (type: string, config: any) => ZingGrid;

    // ZGColumn
    /**
     * @description Fetches the targeted column.
     * @param fieldIndex Field index of column to fetch.
     */
    column: (fieldIndex: string) => any;

    /**
     * @description Filters the column specified by column index. Note: "filter" attribute must be present for
     * this method to work.
     * @param columnIndex Index of column.
     * @param filter Filter string.
     */
    filterColumn: (columnIndex: string, filter: string) => ZingGrid;

    /**
     * @description Advanced filtering on the column specified by column index. Note: "filter" attribute must be present for
     * this method to work with the filter menu enabled.
     * @param fieldIndex Field Index of column.
     * @param filter Advanced Filter configuration.
     * @param filter.conditionals Array of conditional objects to filter on
     * @param filter.conditionals[].condition the key based string for the condition to apply the filter, ie contains, startsWith, greaterThan
     * @param filter.conditionals[].val1 The first value to apply towards the condition
     * @param filter.conditionals[].val2 The second value to apply towards the condition
     * @param filter.boolean 'and' or 'or' indicating how to filter multiple conditionals.  Default is 'and'
     * @param filter.matchCase Boolean indicating if the matching should be case sensitive.  Default is false
     * @param filter.selectItems Array of items to select in the filter menu selectbox
     */
    filterMenuColumn: (fieldIndex: string, filter: {conditionals?: {condition?: string, val1?: string, val2?: string}[], boolean?: string, matchCase?: boolean, selectItems?: string[]}) => ZingGrid;

    /**
     * @description Gets the value of the "col-class" attribute
     */
    getColClass: () => string;

    /**
     * @description Gets the value of the "frozen-columns-left" attribute
     */
    getFrozenColumnsLeft: () => string;

    /**
     * @description Gets the value of the "frozen-columns-right" attribute
     */
    getFrozenColumnsRight: () => string;

    /**
     * @description Gets the value of the "header-auto-format" attribute
     */
    getHeaderAutoFormat: () => boolean;

    /**
     * @description Gets the value of the "nested-data-separator" attribute
     */
    getNestedDataSeparator: () => boolean;

    /**
     * @description Hides a column based on index
     * @param columnIndex Index of column to hide
     */
    hideColumn: (columnIndex: string) => ZingGrid;

    /**
     * @description Hides all columns with the given column type
     * @param columnType Type of the columns to hide
     */
    hideColumnType: (columnType: string) => ZingGrid;

    /**
     * @description Resets the current filter.  Resets either the specified column or all the columns
     * @param fieldIndex Index of column.
     */
    resetFilter: (fieldIndex?: string) => ZingGrid;

    /**
     * @description Sets the "col-class" attribute
     * @param type Class name or function name
     */
    setColClass: (type: string) => ZingGrid;

    /**
     * @description Sets the "columns" property
     * @param columns Array of column objects
     */
    setColumns: (columns: any[]) => ZingGrid;

    /**
     * @description Sets the "columns-control" attribute
     * @param activate Value to add or remove
     */
    setColumnsControl: (activate: boolean) => ZingGrid;

    /**
     * @description Sets the "frozen-columns-left" attribute
     * @param type The number of columns to freeze to the left
     */
    setFrozenColumnsLeft: (type: number) => ZingGrid;

    /**
     * @description Sets the "frozen-columns-right" attribute
     * @param type The number of columns to freeze to the right
     */
    setFrozenColumnsRight: (type: number) => ZingGrid;

    /**
     * @description Sets the "header-auto-format" attribute
     * @param activate Value to add or remove
     */
    setHeaderAutoFormat: (activate: boolean) => ZingGrid;

    /**
     * @description Sets the "nested-data-separator" attribute
     * @param separator The separator value
     */
    setNestedDataSeparator: (separator: string) => ZingGrid;

    /**
     * @description Sets column to be visible
     * @param columnIndex Index of column to show
     */
    showColumn: (columnIndex: string) => ZingGrid;

    /**
     * @description Sorts the given column with the given sort direction
     * @param columnIndex Index of column to sort
     * @param direction Sort Direction: asc, desc, or none
     */
    sortColumn: (columnIndex: string, direction: string) => ZingGrid;

    /**
     * @description Toggles the visibility of a column by index
     * @param columnIndex Index of column to toggle
     * @param hide Visibility of column
     */
    toggleColumn: (columnIndex: string, hide: boolean) => ZingGrid;

    // ZGBody
    /**
     * @description Scrolls the ZGBody to the left by the given increment (in pixels) or the default of 100px
     * @param scrollIncrement The amount of pixels to scroll
     */
    scrollLeft: (scrollIncrement?: number) => ZingGrid;

    /**
     * @description Scrolls the ZGBody all the way to the left
     */
    scrollLeftMax: () => ZingGrid;

    /**
     * @description Scrolls the ZGBody to the right by the given increment (in pixels) or the default of 100px
     * @param scrollIncrement The amount of pixels to scroll
     */
    scrollRight: (scrollIncrement?: number) => ZingGrid;

    /**
     * @description Scrolls the ZGBody all the way to the right
     */
    scrollRightMax: () => ZingGrid;

    // ZGSelector
    /**
     * @description Deselects all cells
     */
    deselect: () => ZingGrid;

    /**
     * @description Deselects row at given 0 based index.
     * @param rowIndex Row to deselect
     */
    deselectRow: (rowIndex: string) => ZingGrid;

    /**
     * @description Deselects any row selected by the row selector column
     */
    deselectRows: () => ZingGrid;

    /**
     * @description Returns an array of selected rows
     */
    getSelectedRows: () => any[];

    /**
     * @description Gets the value of the "selector" attribute
     */
    getSelector: () => boolean;

    /**
     * @description Selects one or more cells
     * @param rowIndex Row of cell to select
     * @param colIndex Column of cell to select
     * @param endRowIndex Optional end cell row for multi-cell selection
     * @param endColIndex Optional end cell column for multi-cell selection
     */
    select: (rowIndex: string, colIndex: string, endRowIndex?: string, endColIndex?: string) => ZingGrid;

    /**
     * @description Selects all cells
     */
    selectAll: () => ZingGrid;

    /**
     * @description Selects row at given 0 based index.  Will not select if there is no selector column or index is off page.
     * @param rowIndex Row to select
     */
    selectRow: (rowIndex: string) => ZingGrid;

    /**
     * @description Sets the "selector" attribute
     * @param activate Value to add or remove
     */
    setSelector: (activate: boolean) => ZingGrid;

    // ZGPager
    /**
     * @description Navigates to first page in the grid
     */
    firstPage: () => ZingGrid;

    /**
     * @description Gets the current page. Does not apply to cursor paging.
     */
    getPageIndex: () => number;

    /**
     * @description Gets the current "page-size"
     */
    getPageSize: () => number;

    /**
     * @description Gets the value of the "page-size-card" attribute
     */
    getPageSizeCard: () => string;

    /**
     * @description Gets the value of the "page-size-row" attribute
     */
    getPageSizeRow: () => string;

    /**
     * @description Gets the value of the "pager" attribute
     */
    getPager: () => boolean;

    /**
     * @description Navigates to the last page in the grid
     */
    lastPage: () => ZingGrid;

    /**
     * @description Navigates to the next page in the grid
     */
    nextPage: () => ZingGrid;

    /**
     * @description Navigates to the previous page in the grid
     */
    prevPage: () => ZingGrid;

    /**
     * @description Changes the current page index to be the specified value
     * @param pageIndex New page index
     */
    setPageIndex: (pageIndex: number) => ZingGrid;

    /**
     * @description Changes the current page size to be the specified value
     * @param pageSize New page size
     */
    setPageSize: (pageSize: number) => ZingGrid;

    /**
     * @description Changes the current page size to be the specified value in card mode
     * @param pageSize New card page size
     */
    setPageSizeCard: (pageSize: number) => ZingGrid;

    /**
     * @description Sets the page size options for the pager drop down
     * @param options Comma separated list of numerical page sizes
     */
    setPageSizeOptions: (options: string) => ZingGrid;

    /**
     * @description Changes the current page size to be the specified value in row mode
     * @param pageSize New row page size
     */
    setPageSizeRow: (pageSize: number) => ZingGrid;

    /**
     * @description Sets the "pager" attribute
     * @param activate Value to add or remove
     */
    setPager: (activate: boolean) => ZingGrid;

    // ZGCaption
    /**
     * @description Gets the value of the "caption" attribute
     */
    getCaption: () => string;

    /**
     * @description Set the caption text
     * @param sCaption Text to set the caption to. If no string is passed, it will remove the caption.
     */
    setCaption: (sCaption: string) => ZingGrid;

    // ZGData
    /**
     * @description Fetches the internal property referencing the dataset for the grid
     * @param config Optional, options for the data retrieval.  Options are:
     * csv (set true to return csv string),
     * headers (set true to return headers - only applies to csv or JSON array of arrays),
     * cols (set to 'all' or 'visible' to return all or only visible columns),
     * rows (set to 'all' or 'visible' to return all or only visible rows)
     */
    getData: (config?: any) => any;

    /**
     * @description Gets the value of the "src" attribute
     */
    getSrc: () => string;

    /**
     * @description Gets the value of the "template-end-delimiter" attribute
     */
    getTemplateEndDelimiter: () => string;

    /**
     * @description Gets the value of the "template-start-delimiter" attribute
     */
    getTemplateStartDelimiter: () => string;

    /**
     * @description Inserts a new row into the grid
     * @param data Data to insert into new row
     * @param id If the id is already set on the new record, pass it in here
     * @param noDataSource If you only want to do a local insert, set "noDataSource" to "true"
     */
    insertRow: (data?: any, id?: string, noDataSource?: boolean) => ZingGrid;

    /**
     * @description Refreshes all cells. Note: if using static data, original cell value will be restored.
     */
    refresh: () => undefined;

    /**
     * @description Refreshes entire grid.  Useful for language change.
     */
    refreshGrid: () => undefined;

    /**
     * @description Removes a record from the grid
     * @param id ID of the record to remove
     * @param noDataSource If you only want to remove from the grid and not the external datasource, set "noDataSource" to "true"
     */
    removeRecord: (id?: string, noDataSource?: boolean) => ZingGrid;

    /**
     * @description Removes a row from the grid
     * @param rowIndex Row index (0 based) of the record to remove
     * @param noDataSource If you only want to remove from the grid and not the external datasource, set "noDataSource" to "true"
     */
    removeRow: (rowIndex?: string, noDataSource?: boolean) => ZingGrid;

    /**
     * @description Sets or updates the dataset for the grid
     * @param data JSON data
     * @param bKeepSort If true, the grid will try to maintain the sort on the new data.
     */
    setData: (data: any, bKeepSort: boolean) => ZingGrid;

    /**
     * @description Sets the "src" attribute
     * @param src Value to indicate a path to a remote data source
     */
    setSrc: (src: string) => ZingGrid;

    /**
     * @description Sets the "template-end-delimiter" attribute
     * @param delim Value to indicate regex expression for closing data binding
     */
    setTemplateEndDelimiter: (delim: string) => ZingGrid;

    /**
     * @description Sets the "template-start-delimiter" attribute
     * @param delim Value to indicate regex expression for opening data binding
     */
    setTemplateStartDelimiter: (delim: string) => ZingGrid;

    /**
     * @description Updates a cell in the grid
     * @param id ID of the record to update
     * @param fieldIndex Field index of the cell to update
     * @param val New Value
     * @param noDataSource If you only want to update the grid and not the external datasource, set "noDataSource" to "true"
     */
    updateCellByID: (id: number, fieldIndex: number, val: any, noDataSource?: boolean) => ZingGrid;

    /**
     * @description Updates a cell in the grid
     * @param rowIndex Row index (0 based) of the cell to update
     * @param columnIndex Column index (0 based) of the cell to update
     * @param val New Value
     * @param noDataSource If you only want to update the grid and not the external datasource, set "noDataSource" to "true"
     */
    updateCellByPosition: (rowIndex: number, columnIndex: number, val: any, noDataSource?: boolean) => ZingGrid;

    /**
     * @description Updates a record in the grid
     * @param id ID of the record to update
     * @param data Data to update
     * @param noDataSource If you only want to update the grid and not the external datasource, set "noDataSource" to "true"
     * @param noRefresh If you only do not want the display to do an refresh after updating the record, set "noRefresh" to "true".  NOTE:  Any data change will NOT be reflected in the grid if this is set to "true"
     */
    updateRecord: (id?: string, data?: any, noDataSource?: boolean, noRefresh?: boolean) => ZingGrid;

    /**
     * @description Updates a row in the grid
     * @param rowIndex Row index (0 based) of the record to update
     * @param data Data to update
     * @param noDataSource If you only want to update the grid and not the external datasource, set "noDataSource" to "true"
     * @param noRefresh If you only do not want the display to do an refresh after updating the record, set "noRefresh" to "true".  NOTE:  Any data change will NOT be reflected in the grid if this is set to "true"
     */
    updateRow: (rowIndex: string, data: any, noDataSource?: boolean, noRefresh?: boolean) => ZingGrid;

    // ZGCellOverflow
    /**
     * @description Hides the cell overflow
     * @param columnIndex Index of column to hide cell overflow
     */
    hideCellOverflow: (columnIndex: string) => ZingGrid;

    // ZGSearch
    /**
     * @description Gets the value of the "search" attribute
     */
    getSearch: () => boolean;

    /**
     * @description Searches the grid with the search term indicated
     * @param search Search term
     */
    searchGrid: (search: string) => ZingGrid;

    /**
     * @description Sets the "search" attribute
     * @param activate Value to add or remove
     */
    setSearch: (activate: boolean) => ZingGrid;

    // ZGCell
    /**
     * @description Fetches the targeted cell.
     * @param rowContainerIndex The index of the row to fetch.
     * @param columnContainerIndex The index of the column fetch.
     */
    cell: (rowContainerIndex: number, columnContainerIndex: number) => any;

    /**
     * @description Get the value of the "cell-break" attribute.
     */
    getCellBreak: () => string;

    /**
     * @description Gets the value of the "cell-class" attribute
     */
    getCellClass: () => string;

    /**
     * @description Fetches all cells
     */
    getCells: () => any[];

    /**
     * @description Gets the value of the "default-display" attribute
     */
    getDefaultDisplay: () => string | boolean;

    /**
     * @description Sets the "cell-break" attribute
     * @param type Type of cell-break
     */
    setCellBreak: (type: 'all' | 'ellipsis' | 'word') => ZingGrid;

    /**
     * @description Sets the "cell-class" attribute
     * @param type Class name or function name
     */
    setCellClass: (type: string) => ZingGrid;

    /**
     * @description Sets the "default-display" attribute
     * @param value Value to use as default cell display if data is undefined or null
     */
    setDefaultDisplay: (value: string) => ZingGrid;

    // ZGRow
    /**
     * @description Gets the value of the "frozen-row-class" attribute
     */
    getFrozenRowClass: () => string;

    /**
     * @description Gets the value of the "frozen-rows-bottom" attribute
     */
    getFrozenRowsBottom: () => string;

    /**
     * @description Gets the value of the "frozen-rows-top" attribute
     */
    getFrozenRowsTop: () => string;

    /**
     * @description Gets the value of the "row-class" attribute
     */
    getRowClass: () => string;

    /**
     * @description Gets the value of the "zebra" attribute
     */
    getZebra: () => string;

    /**
     * @description Fetches the targeted row.
     * @param rowContainerIndex The index of the row to fetch.
     */
    row: (rowContainerIndex: number) => any;

    /**
     * @description Sets the "frozen-row-class" attribute
     * @param type Class name or function name
     */
    setFrozenRowClass: (type: string) => ZingGrid;

    /**
     * @description Sets the "frozen-rows-bottom" attribute
     * @param type The number of rows to freeze to the bottom
     */
    setFrozenRowsBottom: (type: number) => ZingGrid;

    /**
     * @description Sets the "frozen-rows-top" attribute
     * @param type The number of rows to freeze to the top
     */
    setFrozenRowsTop: (type: number) => ZingGrid;

    /**
     * @description Sets the "row-class" attribute
     * @param type Class name or function name
     */
    setRowClass: (type: string) => ZingGrid;

    /**
     * @description Sets the "zebra" attribute
     * @param type Class name or function name
     */
    setZebra: (type: string) => ZingGrid;

    // ZGEditor
    /**
     * @description Gets the value of the "confirmations" attribute
     */
    getConfirmations: () => string;

    /**
     * @description Gets the value of the "creator" attribute
     */
    getCreator: () => string;

    /**
     * @description Gets the value of the "editor" attribute
     */
    getEditor: () => string;

    /**
     * @description Gets the value of the "editor-controls" attribute
     */
    getEditorControls: () => string;

    /**
     * @description Gets the value of the "record-duplicate" attribute
     */
    getRecordDuplicate: () => boolean;

    /**
     * @description Gets the value of the "row-selector" attribute
     */
    getRowSelector: () => boolean;

    /**
     * @description Opens specified row in edit mode if editing is allowed
     */
    openRowEditor: () => ZingGrid;

    /**
     * @description Sets the "confirmations" attribute
     * @param types string value to indicate what confirmations to enable
     */
    setConfirmations: (types: string) => ZingGrid;

    /**
     * @description Sets the "creator" attribute
     * @param sMode Value of the creator mode
     */
    setCreator: (sMode: string) => ZingGrid;

    /**
     * @description Sets the "editor" attribute
     * @param activate Boolean value to indicate add or remove, or string value to indicate the editor type
     */
    setEditor: (activate: boolean | string) => ZingGrid;

    /**
     * @description Sets the "editor-controls" attribute
     * @param types Boolean value to indicate add or remove, or string value to indicate what editor controls to add
     */
    setEditorControls: (types: boolean | string) => ZingGrid;

    /**
     * @description Sets the "record-duplicate" attribute
     * @param duplicate Value to add or remove
     */
    setRecordDuplicate: (duplicate: boolean) => ZingGrid;

    /**
     * @description Sets the "row-selector" attribute
     * @param activate Value to add or remove
     */
    setRowSelector: (activate: boolean) => ZingGrid;

    // ZGMenu
    /**
     * @description Closes currently opened contextmenu.
     */
    closeContextMenu: () => ZingGrid;

    /**
     * @description Gets the value of the "columns-control" attribute
     */
    getColumnsControl: () => boolean;

    /**
     * @description Gets the value of the "context-menu" attribute
     */
    getContextMenu: () => string | boolean;

    /**
     * @description Gets the value of the "static-menu" attribute
     */
    getStaticMenu: () => string;

    /**
     * @description Sets the "context-menu" attribute.
     * @param types Boolean value to indicate add or remove, or string value to indicate reference to id of context-menu.
     */
    setContextMenu: (types: boolean | string) => ZingGrid;

    /**
     * @description Sets the "static-menu" attribute
     * @param activate Value to add or remove
     */
    setStaticMenu: (activate: boolean) => ZingGrid;

    // ZingGrid
    /**
     * @description Calculates aggregate values
     * @param method The method to calculate.  Options are 'sum', 'avg', 'min', 'max', and 'count'
     * @param options The options to be used in calculating the value.  Currently fieldIndex is only option.
     * @param data The data to calculate the value on.  If this is not set, it uses the grids full dataset
     */
    calculate: (method: string, options: any, data: any[]) => string;

    /**
     * @description Clears the grid state
     */
    clearState: () => void;

    /**
     * @description Executes callback function when grid completes load. If grid is already loaded, it will execute immediately.
     * @param callback Callback function to execute
     */
    executeOnLoad: (callback: any) => undefined;

    /**
     * @description Formats a Date
     * @param date The Date to format
     * @param format The tokenized format to format the date
     */
    formatDate: (date: string | Date, format: string) => string;

    /**
     * @description Formats a Date in from now format
     * @param date The Date to format
     * @param raw Indicates if we should include 'ago/to' to indicate past/future
     */
    fromNow: (date: Date, raw: boolean) => string;

    /**
     * @description Get the value of the "aggregate" attribute.  Does not return any user defined aggregate columns.
     */
    getAggregate: () => string;

    /**
     * @description Gets the value of the "batch-edit" attribute
     */
    getBatchEdit: () => boolean;

    /**
     * @description Gets the value of the "batch-edit-status" attribute
     */
    getBatchEditStatus: () => string;

    /**
     * @description Gets the value of the "column-drag" attribute
     */
    getColumnDrag: () => boolean;

    /**
     * @description Gets the value of the "column-drag-action" attribute
     */
    getColumnDragAction: () => string;

    /**
     * @description Gets the value of the "compact" attribute
     */
    getCompact: () => string | boolean;

    /**
     * @description Exposes the Constants object for the user to customize
     */
    getConstants: () => any;

    /**
     * @description Gets the dir setting for the grid
     */
    getDir: () => string;

    /**
     * @description Gets the value of the "gridlines" attribute
     */
    getGridlines: () => string;

    /**
     * @description Gets the indexes of the current row groupings.  Returns false if none
     */
    getGroupBy: () => string | boolean;

    /**
     * @description Gets the value of the "height" attribute
     */
    getHeight: () => string;

    /**
     * @description Gets the language used on the grid
     */
    getLang: () => string;

    /**
     * @description Gets the value of the "preserve-state-id" attribute
     */
    getPreserveStateId: () => ZingGrid;

    /**
     * @description Gets the value of the "preserve-state-load" attribute
     */
    getPreserveStateLoad: () => ZingGrid;

    /**
     * @description Gets the value of the "preserve-state-options" attribute
     */
    getPreserveStateOptions: () => ZingGrid;

    /**
     * @description Gets the value of the "preserve-state-save" attribute
     */
    getPreserveStateSave: () => ZingGrid;

    /**
     * @description Gets the value of the "row-height" attribute
     */
    getRowHeight: () => string;

    /**
     * @description Gets the value of the "row-height-scope" attribute
     */
    getRowHeightScope: () => string;

    /**
     * @description Gets the value of the "width" attribute
     */
    getWidth: () => string;

    /**
     * @description Sets the "aggregate" attribute
     * @param aggregate Value to set aggregate to
     */
    setAggregate: (aggregate: string) => ZingGrid;

    /**
     * @description Sets the value of the "batch-edit" attribute
     * @param batchEdit Value of batch-edit
     */
    setBatchEdit: (batchEdit: boolean) => ZingGrid;

    /**
     * @description Sets the value of the "batch-edit-status" attribute
     * @param batchEditStatus Value of the batch-edit-status
     */
    setBatchEditStatus: (batchEditStatus: string) => ZingGrid;

    /**
     * @description Sets the build code and removes watermarks if it is valid.
     * If the build code is not set on page load, it is possible to set it through this API Method.
     * @param buildcode The buildcode array
     */
    setBuildCode: (buildcode: any[]) => ZingGrid;

    /**
     * @description Sets the "column-drag" attribute
     * @param activate Boolean value to indicate add or remove
     */
    setColumnDrag: (activate: boolean) => ZingGrid;

    /**
     * @description Sets the "column-drag-action" attribute
     * @param type Type of drag to enable
     */
    setColumnDragAction: (type: 'reorder' | 'remove' | 'both') => ZingGrid;

    /**
     * @description Sets the "compact" attribute
     * @param activate Value to add or remove
     */
    setCompact: (activate: boolean) => ZingGrid;

    /**
     * @description Sets the "dir" attribute
     * @param type Type of dir
     */
    setDir: (type: 'ltr' | 'rtl') => ZingGrid;

    /**
     * @description Sets the "gridlines" attribute
     * @param type Type of gridlines to set on the grid
     */
    setGridlines: (type: 'both' | 'horz' | 'horizontal' | 'vert' | 'vertical') => ZingGrid;

    /**
     * @description Sets the "group-by" attribute
     * @param index Index to set the group-by
     */
    setGroupBy: (index: string) => ZingGrid;

    /**
     * @description Sets the "height" attribute
     * @param height Value setting the height of the grid
     */
    setHeight: (height: number) => ZingGrid;

    /**
     * @description Sets the "lang" attribute
     * @param lang Language to set on the grid
     */
    setLang: (lang: string) => ZingGrid;

    /**
     * @description Sets the license and removes watermarks if it is valid.
     * If the license is not set on page load, it is possible to set it through this API Method
     * @param license The license array
     */
    setLicense: (license: any[]) => ZingGrid;

    /**
     * @description Sets the "preserve-state-id" attribute
     * @param id Value setting the id
     */
    setPreserveStateId: (id: string) => ZingGrid;

    /**
     * @description Sets the "preserve-state-load" attribute as a reference of the user defined method to call on state load
     * @param functionName Value setting the function
     */
    setPreserveStateLoad: (functionName: string) => ZingGrid;

    /**
     * @description Sets the "preserve-state-options" attribute as a comma separated string of the options
     * @param options Value setting the options
     */
    setPreserveStateOptions: (options: string) => ZingGrid;

    /**
     * @description Sets the "preserve-state-save" attribute as a reference of the user defined method to call on state save
     * @param functionName Value setting the function
     */
    setPreserveStateSave: (functionName: string) => ZingGrid;

    /**
     * @description Sets the "record-count" attribute
     * @param count Value setting the count
     */
    setRecordCount: (count: number) => ZingGrid;

    /**
     * @description Sets the "row-height" attribute
     * @param height CSS height to set for the row height
     */
    setRowHeight: (height: string) => ZingGrid;

    /**
     * @description Sets the "row-height-scope" attribute
     * @param scope Set to 'data', 'headers', or 'all'
     */
    setRowHeightScope: (scope: void) => ZingGrid;

    /**
     * @description Sets the grid state with the options passed in
     * @param state JSON string or object setting the state
     */
    setState: (state: string) => void;

    /**
     * @description Sets the grid state for the given field
     * @param stateName Name of the state to set
     * @param state String, JSON string or object setting the state
     */
    setStateField: (stateName: string, state: string) => void;

    /**
     * @description Sets the "width" attribute
     * @param width Value setting the width of the grid
     */
    setWidth: (width: number) => ZingGrid;

    /**
     * @description Forces a resize event to be triggered and to partially repaint the grid. Useful when the container updates size without the window updating.
     * @param showLoading Display the loading screen while updating the grid.  False by default
     * @param delay The time to delay the action.  This should be > the time it takes to do the CSS transition.  Value in seconds
     */
    updateSize: (showLoading: boolean, delay: number) => ZingGrid;

    // ZGRowDetails
    /**
     * @description Gets the value of the "row-details-renderer" attribute
     */
    getRowDetailsRenderer: () => string;

    /**
     * @description Gets the value of the "row-details-template" attribute
     */
    getRowDetailsTemplate: () => string;

    /**
     * @description Sets the "row-details-renderer" attribute
     * @param renderer Name of the function that should be renderered for row-details
     */
    setRowDetailsRenderer: (renderer: string) => ZingGrid;

    /**
     * @description Sets the "row-details-template" attribute
     * @param template ID of the template that should be used for row-details
     */
    setRowDetailsTemplate: (template: string) => ZingGrid;

    // ZGFilter
    /**
     * @description Gets the value of the "filter" attribute
     */
    getFilter: () => boolean;

    /**
     * @description Sets the "filter" attribute
     * @param activate Value to add or remove
     */
    setFilter: (activate: boolean) => ZingGrid;

    // ZGFoot
    /**
     * @description Gets the value of the "foot-class" attribute
     */
    getFootClass: () => string;

    /**
     * @description Sets the "foot-class" attribute
     * @param type class name or function name
     */
    setFootClass: (type: string) => ZingGrid;

    // ZGHead
    /**
     * @description Gets the value of the "head-class" attribute
     */
    getHeadClass: () => string;

    /**
     * @description Sets the "head-class" attribute
     * @param type Class name or function name
     */
    setHeadClass: (type: string) => ZingGrid;

    // ZGIcon
    /**
     * @description Gets the value of the "icon-set" attribute
     */
    getIconSet: () => string;

    /**
     * @description Sets the "icon-set" attribute
     * @param type Icon set to use in the grid
     */
    setIconSet: (type: string) => ZingGrid;

    // ZGLayout
    /**
     * @description Gets the value of the "layout" attribute
     */
    getLayout: () => string;

    /**
     * @description Gets the value of the "layout-controls" attribute
     */
    getLayoutControls: () => string;

    /**
     * @description Sets the "layout" attribute
     * @param type Value to indicate the grid layout
     */
    setLayout: (type: 'row' | 'card') => ZingGrid;

    /**
     * @description Sets the "layout-controls" attribute
     * @param activate Value to add or remove
     */
    setLayoutControls: (activate: boolean) => ZingGrid;

    // ZGNoData
    /**
     * @description Gets the value of the "no-data" attribute
     */
    getNodata: () => string;

    /**
     * @description Sets the "no-data" attribute
     * @param value Message to display when there is no data
     */
    setNoData: (value: string) => ZingGrid;

    // ZGSorter
    /**
     * @description Gets the value of the "sort" attribute
     */
    getSort: () => string;

    /**
     * @description Gets the current sorted column as well as the sort direction
     */
    getSortedColumn: () => any;

    /**
     * @description Gets the value of the "sorter" attribute
     */
    getSorter: () => string;

    /**
     * @description Sets the "sort" attribute
     * @param types Boolean value to indicate add or remove
     */
    setSort: (types: boolean) => ZingGrid;

    /**
     * @description Sets the "sorter" attribute
     * @param types String value to indicate reference to custom sorter function
     */
    setSorter: (types: boolean | string) => ZingGrid;

    // ZGSource
    /**
     * @description Gets the value of the "source" attribute
     */
    getSource: () => string;

    /**
     * @description Sets the "source" attribute. Not to be confused with "src" attribute, the "source" attribute is for citation.
     * @param value Source of the data in the grid
     */
    setSource: (value: string) => ZingGrid;

    // ZGTheme
    /**
     * @description Gets the value of the "theme" attribute
     */
    getTheme: () => string;

    /**
     * @description Sets the "theme" attribute
     * @param theme Value to indicate which theme to set
     */
    setTheme: (theme: string) => ZingGrid;

    // ZGViewport
    /**
     * @description Gets the value of the "viewport" attribute
     */
    getViewport: () => string;

    /**
     * @description Gets the value of the "viewport-pause" attribute
     */
    getViewportPause: () => boolean;

    /**
     * @description Gets the value of the "viewport-stop" attribute
     */
    getViewportStop: () => boolean;

    /**
     * @description Gets the value of the "viewport-types" attribute
     */
    getViewportTypes: () => string;

    /**
     * @description Sets the "viewport-pause" attribute
     * @param activate Value to add or remove
     */
    setViewportPause: (activate: boolean) => ZingGrid;

    /**
     * @description Sets the "viewport-stop" attribute
     * @param activate Value to add or remove
     */
    setViewportStop: (activate: boolean) => ZingGrid;

    // ZGCard
    /**
     * @description Sets the id to reference an external "template" to be used as "<zg-card>"
     * @param id Value of id to use the card template.
     */
    setCardTemplate: (id: string) => ZingGrid;
  }

  interface ZingGrid extends NonoptionalAttributes, Omit<ZingGridAttributes.ZingGrid, 'accessKey'
    | 'accessKeyLabel' | 'anchorElement' | 'attachInternals' | 'attributeStyleMap' | 'autocapitalize' | 'autocorrect' | 'autofocus'
    | 'beforetoggle_event' | 'blur' | 'change_event' | 'click' | 'command_event' | 'contentEditable' | 'dataset'
    | 'dir' | 'drag_event' | 'dragend_event' | 'dragenter_event' | 'dragexit_event' | 'draggable' | 'dragleave_event'
    | 'dragover_event' | 'dragstart_event' | 'drop_event' | 'editContext' | 'enterKeyHint' | 'error_event' | 'focus'
    | 'hidden' | 'hidePopover' | 'inert' | 'innerText' | 'inputMode' | 'isContentEditable' | 'lang'
    | 'load_event' | 'nonce' | 'offsetHeight' | 'offsetLeft' | 'offsetParent' | 'offsetTop' | 'offsetWidth'
    | 'outerText' | 'popover' | 'showPopover' | 'spellcheck' | 'style' | 'tabIndex' | 'title'
    | 'togglePopover' | 'toggle_event' | 'translate' | 'virtualKeyboardPolicy' | 'writingSuggestions'>, CatchAll, HTMLElement {}
}

interface HTMLElementTagNameMap {
  'zg-batch-edit': ZSoft.ZGBatchEdit;
  'zg-body': ZSoft.ZGBody;
  'zg-button': ZSoft.ZGButton;
  'zg-caption': ZSoft.ZGCaption;
  'zg-card': ZSoft.ZGCard;
  'zg-cell': ZSoft.ZGCell;
  'zg-cell-overflow': ZSoft.ZGCellOverflow;
  'zg-checkbox': ZSoft.ZGCheckbox;
  'zg-colgroup': ZSoft.ZGColgroup;
  'zg-column': ZSoft.ZGColumn;
  'zg-column-resize': ZSoft.ZGColumnResize;
  'zg-control-bar': ZSoft.ZGControlBar;
  'zg-data': ZSoft.ZGData;
  'zg-dialog': ZSoft.ZGDialog;
  'zg-editor-row': ZSoft.ZGEditorRow;
  'zg-filter': ZSoft.ZGFilter;
  'zg-filter-menu': ZSoft.ZGFilterMenu;
  'zg-focus': ZSoft.ZGFocus;
  'zg-foot': ZSoft.ZGFoot;
  'zg-footer': ZSoft.ZGFooter;
  'zg-frozen-colgroup': ZSoft.ZGFrozenColgroup;
  'zg-head': ZSoft.ZGHead;
  'zg-head-cell': ZSoft.ZGHeadCell;
  'zg-header': ZSoft.ZGHeader;
  'zg-icon': ZSoft.ZGIcon;
  'zg-input': ZSoft.ZGInput;
  'zg-layout-controls': ZSoft.ZGLayoutControls;
  'zg-load-mask': ZSoft.ZGLoadMask;
  'zg-menu': ZSoft.ZGMenu;
  'zg-menu-group': ZSoft.ZGMenuGroup;
  'zg-menu-item': ZSoft.ZGMenuItem;
  'zg-no-data': ZSoft.ZGNoData;
  'zg-option-list': ZSoft.ZGOptionList;
  'zg-pager': ZSoft.ZGPager;
  'zg-param': ZSoft.ZGParam;
  'zg-row': ZSoft.ZGRow;
  'zg-row-details': ZSoft.ZGRowDetails;
  'zg-search': ZSoft.ZGSearch;
  'zg-select': ZSoft.ZGSelect;
  'zg-selector-mask': ZSoft.ZGSelectorMask;
  'zg-separator': ZSoft.ZGSeparator;
  'zg-source': ZSoft.ZGSource;
  'zg-status': ZSoft.ZGStatus;
  'zg-table': ZSoft.ZGTable;
  'zg-text': ZSoft.ZGText;
  'zg-tooltip': ZSoft.ZGTooltip;
  'zing-grid': ZSoft.ZingGrid;
}

declare namespace JSX {
  interface IntrinsicElements {
    'zg-batch-edit': ZSoft.CatchAll;
    ZGBatchEdit: ZSoft.CatchAll;
    'zg-body': ZSoft.CatchAll;
    ZGBody: ZSoft.CatchAll;
    'zg-button': KebabKeys<ZSoft.ZingGridAttributes.ZGButton> | ZSoft.CatchAll;
    ZGButton: ZSoft.ZingGridAttributes.ZGButton | ZSoft.CatchAll;
    'zg-caption': KebabKeys<ZSoft.ZingGridAttributes.ZGCaption> | ZSoft.CatchAll;
    ZGCaption: ZSoft.ZingGridAttributes.ZGCaption | ZSoft.CatchAll;
    'zg-card': KebabKeys<ZSoft.ZingGridAttributes.ZGCard> | ZSoft.CatchAll;
    ZGCard: ZSoft.ZingGridAttributes.ZGCard | ZSoft.CatchAll;
    'zg-cell': ZSoft.CatchAll;
    ZGCell: ZSoft.CatchAll;
    'zg-cell-overflow': ZSoft.CatchAll;
    ZGCellOverflow: ZSoft.CatchAll;
    'zg-checkbox': KebabKeys<ZSoft.ZingGridAttributes.ZGCheckbox> | ZSoft.CatchAll;
    ZGCheckbox: ZSoft.ZingGridAttributes.ZGCheckbox | ZSoft.CatchAll;
    'zg-colgroup': ZSoft.CatchAll;
    ZGColgroup: ZSoft.CatchAll;
    'zg-column': KebabKeys<ZSoft.ZingGridAttributes.ZGColumn> | ZSoft.CatchAll;
    ZGColumn: ZSoft.ZingGridAttributes.ZGColumn | ZSoft.CatchAll;
    'zg-column-resize': ZSoft.CatchAll;
    ZGColumnResize: ZSoft.CatchAll;
    'zg-control-bar': ZSoft.CatchAll;
    ZGControlBar: ZSoft.CatchAll;
    'zg-data': KebabKeys<ZSoft.ZingGridAttributes.ZGData> | ZSoft.CatchAll;
    ZGData: ZSoft.ZingGridAttributes.ZGData | ZSoft.CatchAll;
    'zg-dialog': KebabKeys<ZSoft.ZingGridAttributes.ZGDialog> | ZSoft.CatchAll;
    ZGDialog: ZSoft.ZingGridAttributes.ZGDialog | ZSoft.CatchAll;
    'zg-editor-row': ZSoft.CatchAll;
    ZGEditorRow: ZSoft.CatchAll;
    'zg-filter': ZSoft.CatchAll;
    ZGFilter: ZSoft.CatchAll;
    'zg-filter-menu': ZSoft.CatchAll;
    ZGFilterMenu: ZSoft.CatchAll;
    'zg-focus': ZSoft.CatchAll;
    ZGFocus: ZSoft.CatchAll;
    'zg-foot': ZSoft.CatchAll;
    ZGFoot: ZSoft.CatchAll;
    'zg-footer': ZSoft.CatchAll;
    ZGFooter: ZSoft.CatchAll;
    'zg-frozen-colgroup': ZSoft.CatchAll;
    ZGFrozenColgroup: ZSoft.CatchAll;
    'zg-head': ZSoft.CatchAll;
    ZGHead: ZSoft.CatchAll;
    'zg-head-cell': ZSoft.CatchAll;
    ZGHeadCell: ZSoft.CatchAll;
    'zg-header': ZSoft.CatchAll;
    ZGHeader: ZSoft.CatchAll;
    'zg-icon': KebabKeys<ZSoft.ZingGridAttributes.ZGIcon> | ZSoft.CatchAll;
    ZGIcon: ZSoft.ZingGridAttributes.ZGIcon | ZSoft.CatchAll;
    'zg-input': KebabKeys<ZSoft.ZingGridAttributes.ZGInput> | ZSoft.CatchAll;
    ZGInput: ZSoft.ZingGridAttributes.ZGInput | ZSoft.CatchAll;
    'zg-layout-controls': ZSoft.CatchAll;
    ZGLayoutControls: ZSoft.CatchAll;
    'zg-load-mask': ZSoft.CatchAll;
    ZGLoadMask: ZSoft.CatchAll;
    'zg-menu': KebabKeys<ZSoft.ZingGridAttributes.ZGMenu> | ZSoft.CatchAll;
    ZGMenu: ZSoft.ZingGridAttributes.ZGMenu | ZSoft.CatchAll;
    'zg-menu-group': ZSoft.CatchAll;
    ZGMenuGroup: ZSoft.CatchAll;
    'zg-menu-item': ZSoft.CatchAll;
    ZGMenuItem: ZSoft.CatchAll;
    'zg-no-data': ZSoft.CatchAll;
    ZGNoData: ZSoft.CatchAll;
    'zg-option-list': ZSoft.CatchAll;
    ZGOptionList: ZSoft.CatchAll;
    'zg-pager': KebabKeys<ZSoft.ZingGridAttributes.ZGPager> | ZSoft.CatchAll;
    ZGPager: ZSoft.ZingGridAttributes.ZGPager | ZSoft.CatchAll;
    'zg-param': KebabKeys<ZSoft.ZingGridAttributes.ZGParam> | ZSoft.CatchAll;
    ZGParam: ZSoft.ZingGridAttributes.ZGParam | ZSoft.CatchAll;
    'zg-row': ZSoft.CatchAll;
    ZGRow: ZSoft.CatchAll;
    'zg-row-details': ZSoft.CatchAll;
    ZGRowDetails: ZSoft.CatchAll;
    'zg-search': ZSoft.CatchAll;
    ZGSearch: ZSoft.CatchAll;
    'zg-select': KebabKeys<ZSoft.ZingGridAttributes.ZGSelect> | ZSoft.CatchAll;
    ZGSelect: ZSoft.ZingGridAttributes.ZGSelect | ZSoft.CatchAll;
    'zg-selector-mask': ZSoft.CatchAll;
    ZGSelectorMask: ZSoft.CatchAll;
    'zg-separator': ZSoft.CatchAll;
    ZGSeparator: ZSoft.CatchAll;
    'zg-source': KebabKeys<ZSoft.ZingGridAttributes.ZGSource> | ZSoft.CatchAll;
    ZGSource: ZSoft.ZingGridAttributes.ZGSource | ZSoft.CatchAll;
    'zg-status': ZSoft.CatchAll;
    ZGStatus: ZSoft.CatchAll;
    'zg-table': ZSoft.CatchAll;
    ZGTable: ZSoft.CatchAll;
    'zg-text': KebabKeys<ZSoft.ZingGridAttributes.ZGText> | ZSoft.CatchAll;
    ZGText: ZSoft.ZingGridAttributes.ZGText | ZSoft.CatchAll;
    'zg-tooltip': ZSoft.CatchAll;
    ZGTooltip: ZSoft.CatchAll;
    'zing-grid': KebabKeys<ZSoft.ZingGridAttributes.ZingGrid> | ZSoft.ZingGridEventHandlers |ZSoft.CatchAll;
    ZingGrid: ZSoft.ZingGridAttributes.ZingGrid | ZSoft.ZingGridEventHandlers |ZSoft.CatchAll;
  }
}

declare namespace ZingGrid {
  /**
   * @description Sets the build code and removes watermarks if it is valid.
   */
  let BUILDCODE: string[];

  /**
   * @description Sets the license and removes watermarks if it is valid.
   */
  let LICENSE: string[];

  /**
   * @description Customizes the user's dialog for all instances of ZingGrid
   * @param type The type of dialog to customize.  If you set as null, the config will be applied to all dialogs.
   * Options are:
   * <ul>
   * <li>field-update
   * <li>record-create
   * <li>record-delete
   * <li>record-info
   * <li>record-update
   * <li>view-error
   * <li>view-info
   * <li>view-success
   * <li>view-warn
   * <li>zg-version
   * </ul>
   * @param config Options for the data retrieval.  Options are:
   * <ul>
   * <li>cancel: Text for the Cancel Button
   * <li>confirm: Text for the Confirm Button
   * <li>label: Label to display on the Dialog
   * </ul>
   */
  function customizeDialog(type: string, config: any): ZingGrid;

  /**
   * @description Formats a Date
   * @param date The Date to format
   * @param format The tokenized format to format the date
   * @param lang The language to use for formatting
   * @param locale The locale to use for the formatting.  Optional.
   */
  function formatDate(date: string | Date, format: string, lang: string, locale?: string): string;

  /**
   * @description Formats a Date in from now format
   * @param date The Date to format
   * @param raw Indicates if we should include 'ago/to' to indicate past/future
   * @param lang The language to use for formatting
   */
  function fromNow(date: Date, raw: boolean, lang?: string): string;

  /**
   * @description Register a method to make connecting a remote data src to your grid even easier. If you
   * have your own standardized endpoints this is very useful. A way for us to provide an ES6 style import
   * mechanism and pattern for building custom data sources.
   * @param sType The string name for the adapter
   * @param oOptions Option list of of adapter variables you want to define. You can define ANY
   * zg-param name value pair here in this option. Refer to the Store.js variable this.oDefaultDataFormat
   */
  function registerAdapter(sType: string, oOptions?: any): void;

  /**
   * @description Register a custom column type to reduce redundant markup and re-use
   * similar code.
   * @param sType Name of cell type.
   * @param oOptions An object to define the renderer and/or editor for the cell type.
   */
  function registerCellType(sType: string, oOptions: any): void;

  /**
   * @description Register a third party client or library to make it available to ZingGrid for JS adapter calls.
   * Currently configured for supabaseJS adapter and dexieCloud adapter
   * @param client The client that will be used for the adapter calls.
   * @param clientUse The client or library use to identify the library.
   * 'primary' | 'subscription' | 'subscriptionEventObject' current choices.  Default is primary
   */
  function registerClient(client: any, clientUse: string): void;

  /**
   * @description Registers the custom filter method.
   * This method can be tied into the menu filter through registerFilter by setting the key in "getConditions()" or in "filter-conditions"
   * @param key The key of the custom filter method.  The key will be used to add to "getConditions()" or in "filter-conditions"
   * @param oCustomFilterObj Object containing the custom filter.  Contains three properties:
   * <ul>
   * <li>title: What displays in the conditions select box
   * <li>fieldCount: How many text fields should be displayed when this condition is selected
   * <li>filterMethod: Points to the method to call when the filter is being run.  Will have an oConfig object that contains:
   * dataVal - The value from the grid's data
   * [val1] - value in the first input box if present
   * [val2] - value in the second input box if present
   * matchCase - boolean indicating if the user selected the match case checkbox
   * <li>showMatchCase: Boolean indicating if the match case checkbox should be displayed.  Default is true
   * </ul>
   * @param oScope Scope of the filter method
   */
  function registerCustomFilterMethod(key: string, oCustomFilterObj: any, oScope?: any): void;

  /**
   * @description Register the life cycle hooks for cell editing. This allows you to import
   * and inherit editors for your library.
   * @param oConfig Object containing editor hooks
   * @param sName String name of custom editor
   * @param oScope Scope of the editor
   */
  function registerEditor(oConfig: any, sName: string, oScope?: any): void;

  /**
   * @description Register the life cycle hooks for filterer. This allows you to import
   * and inherit editors for your library.
   * @param oConfig Object containing filterer life cycle hooks
   * @param sName String name of the filterer
   * @param oScope Scope of the filterer method
   */
  function registerFilterer(oConfig: any, sName: string, oScope?: any): void;

  /**
   * @description Register a method to make it available to ZingGrid even if it outside the window scope.
   * This can be used to make a method accessible to renderer, editor, sorter, and custom styles
   * This is useful for methods within a class or local methods.
   * @param method The method that you wish to expose to ZingGrid.
   * @param name The name to refer to the method.  If the method is not anonymous, the name will default to the
   * name of the method.  If it is anonymous, a name must be set.  Whatever is set here is how you should refer to the method
   * in the grid. Optional.
   * @param scope The scope of the method.  When the method is called "this" will be set to the "scope" value. Optional.
   */
  function registerMethod(method: any, name?: string, scope?: any): void;

  /**
   * @description Register a namespace to make it available to ZingGrid even if it outside the window scope.
   * Once a namespace is registered, the methods within the namespace will be accessible to ZingGrid without having to call "ZingGrid.registerMethod"
   * @param namespace The namespace that you wish to expose to ZingGrid.
   * @param name The name to refer to the namespace. Optional.
   * @param scope The scope of the namespace.  When a method within the namespace is called, "this" will be set to the "scope" value.
   * Defaults to the namespace itself. Optional.
   */
  function registerNamespace(namespace: any, name?: string, scope?: any): void;

  /**
   * @description Register the life cycle hooks for cell validation. This allows you to import
   * and inherit validators for your library.
   * @param oValidator The validator that you wish to expose to ZingGrid.
   * @param sName The name to refer to the validator. Optional.
   * @param oScope The scope of the validator.  When the validator is called "this" will be set to the "scope" value. Optional.
   */
  function registerValidator(oValidator: any, sName?: string, oScope?: any): void;

  /**
   * @description Searches for table element(s) with the "[is="zing-grid"]" attribute to
   * insert the zing-grid. This method should only be used when "table[is="zing-grid"]"
   * is added after the Document has been loaded.
   */
  function searchIsTable(): void;

  /**
   * @description Sets the build code and removes watermarks if it is valid.
   * @param aBuildCode List of build codes
   */
  function setBuildCode(aBuildCode: string[]): void;

  /**
   * @description Sets the license and removes watermarks if it is valid.
   * @param aLicense List of license keys
   * @param aBuildCode List of build codes. Optional.
   */
  function setLicense(aLicense: string[], aBuildCode?: string[]): void;
}

declare class ZingGrid extends ZSoft.ZingGrid {}

declare module 'zingsoft' {
  export = ZingGrid;
}

declare module 'zinggrid-react-wrapper' {
  export = ZingGrid;
}
