// Type definitions for zinggrid 1.2.5
// Project: https://github.com/zinggrid
// Definitions by: Jeanette Phung
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.2.4

type Upper = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" | "M" |
  "N" | "O" | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "W" | "X" | "Y" | "Z";

type Kebab<T extends string> = T extends `${infer L}${Upper}${infer R}` ?
  T extends `${L}${infer U}${R}` ? `${L}-${Lowercase<U>}${Kebab<R>}` : T : T;

type KebabKeys<T> = { [K in keyof T as K extends string ? Kebab<K> : K]: T[K] };


declare namespace ZG {
  type ZingGridFunction = ZingGridCardRenderer | ZingGridCellClass | ZingGridColumnClass | ZingGridColumnRenderer | ZingGridFootClass | ZingGridHeadClass | ZingGridRowClass;

  /**
  * @description Lifecycle hook used when creating cells in card mode
  * @param record The direct record info associated with that row
  * @param cellDOMRef A direct reference to the DOM node for this cell
  * @param rowRef An object containing various row information
  */
  type ZingGridCardRenderer = (record?: any, cellDOMRef?: DOMElement, rowRef?: any) => any;

  /**
  * @description Dynamically render CSS class to cell to cells
  * @param indexValues The index value defined on ZGColumn. Argument amount is dependent on
  * amount of index values defined
  * @param cellDOMRef A direct reference to the DOM node for this cell
  * @param cellRef An object containing various cell information
  */
  type ZingGridCellClass = (...indices?: string | number, cellDOMRef?: DOMElement, cellRef?: any) => any;

  /**
  * @description Define a dynamic class for while column
  * @param columnIndex The index value of the column
  * @param cellDOMRef A direct reference to the DOM node for this cell
  * @param columnRef An object containing various column information
  */
  type ZingGridColumnClass = (columnIndex?: string | number, cellDOMRef?: DOMElement, columnRef?: any) => any;

  /**
  * @description Lifecycle hook used when creating columns in row mode
  * @param indices The indices defined on ZGColumn. Argument amount is dependent on
  * amount of indices defined
  * @param cellDOMRef A direct reference to the DOM node for this cell
  * @param cellRef An object containing various cell information
  */
  type ZingGridColumnRenderer = (...indices?: string | number, cellDOMRef?: DOMElement, columnRef?: any) => any;

  /**
  * @description Define a dynamic class for footer columns
  * @param columnIndex The index value of the column
  * @param cellDOMRef A direct reference to the DOM node for this cell
  * @param cellRef An object containing various cell information
  */
  type ZingGridFootClass = (columnIndex?: string | number, cellDOMRef?: DOMElement, cellRef?: any) => any;

  /**
  * @description Define a dynamic class for column headers
  * @param columnIndex The index value of the column
  * @param cellDOMRef A direct reference to the DOM node for this cell
  * @param columnRef An object containing various column information
  */
  type ZingGridHeadClass = (columnIndex?: string | number, cellDOMRef?: DOMElement, columnRef?: any) => any;

  /**
  * @description Define a dynamic class for whole row
  * @param record Object containing all values in row
  * @param rowIndex The index value of the row
  * @param rowDOMRef A direct reference to the DOM node for this row
  * @param rowRef An object containing various row information
  */
  type ZingGridRowClass = (record?: any, rowIndex?: number, rowDOMRef?: DOMElement, rowRef?: any) => any;

  declare interface ZingGridElementEventMap {
    'menu:click': CustomEvent<any>;
    'cell:beforerender': CustomEvent<any>;
    'cell:click': CustomEvent<any>;
    'cell:closeedit': CustomEvent<any>;
    'cell:copy': CustomEvent<any>;
    'cell:mouseout': CustomEvent<any>;
    'cell:mouseover': CustomEvent<any>;
    'cell:openedit': CustomEvent<any>;
    'cell:paste': CustomEvent<any>;
    'cell:render': CustomEvent<any>;
    'cell:rightclick': CustomEvent<any>;
    'grid:beforerender': CustomEvent<any>;
    'grid:contextmenuclose': CustomEvent<any>;
    'grid:contextmenuopen': CustomEvent<any>;
    'grid:deselect': CustomEvent<any>;
    'grid:hydrate': CustomEvent<any>;
    'grid:keydownesc': CustomEvent<any>;
    'grid:pagechange': CustomEvent<any>;
    'grid:pagefirst': CustomEvent<any>;
    'grid:pagelast': CustomEvent<any>;
    'grid:pagenext': CustomEvent<any>;
    'grid:pageprev': CustomEvent<any>;
    'grid:pagesizechange': CustomEvent<any>;
    'grid:ready': CustomEvent<any>;
    'grid:refresh': CustomEvent<any>;
    'grid:render': CustomEvent<any>;
    'grid:scroll': CustomEvent<any>;
    'grid:search': CustomEvent<any>;
    'grid:select': CustomEvent<any>;
    'grid:selectall': CustomEvent<any>;
    'data:cell:beforechange': CustomEvent<any>;
    'data:cell:change': CustomEvent<any>;
    'data:load': CustomEvent<any>;
    'data:record:beforechange': CustomEvent<any>;
    'data:record:beforedelete': CustomEvent<any>;
    'data:record:beforeinsert': CustomEvent<any>;
    'data:record:change': CustomEvent<any>;
    'data:record:delete': CustomEvent<any>;
    'data:record:insert': CustomEvent<any>;
    'data:record:openinsert': CustomEvent<any>;
    'row:click': CustomEvent<any>;
    'row:mouseout': CustomEvent<any>;
    'row:mouseover': CustomEvent<any>;
    'row:select': CustomEvent<any>;
    'column:click': CustomEvent<any>;
    'column:filter': CustomEvent<any>;
    'column:mouseout': CustomEvent<any>;
    'column:mouseover': CustomEvent<any>;
    'card:click': CustomEvent<any>;
    'card:mouseout': CustomEvent<any>;
    'card:mouseover': CustomEvent<any>;
    'record:click': CustomEvent<any>;
    'record:mouseout': CustomEvent<any>;
    'record:mouseover': CustomEvent<any>;
    'header:click': CustomEvent<any>;
  }

  declare interface ZingGridEventMap extends HTMLElementEventMap, ZingGridElementEventMap {}

  interface ZingGridEventHandlers {
    /**
     * @description Fires the event when custom menu item is clicked.
     */
    'onMenuClick': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the event before a cell is rendered.
     */
    'onCellBeforerender': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the event when a click occurs to a cell.
     */
    'onCellClick': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the event when the cell editor is closed.
     */
    'onCellCloseedit': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the event when copying (ctrl+c) occurs in a cell.
     */
    'onCellCopy': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the event when mouse is moved out of a cell.
     */
    'onCellMouseout': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the event when mouse is moved over a cell.
     */
    'onCellMouseover': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the event when the cell editor is opened.
     */
    'onCellOpenedit': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the event when pasting (ctrl+p) occurs in a cell.
     */
    'onCellPaste': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the event when a cell is rendered.
     */
    'onCellRender': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the event when right click occurs on a cell.
     */
    'onCellRightclick': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the event once before the grid renders.
     */
    'onGridBeforerender': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the  event when the contextmenu is closed.
     */
    'onGridContextmenuclose': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the event when the contextmenu is opened.
     */
    'onGridContextmenuopen': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the event when selection is deselected in the grid.
     */
    'onGridDeselect': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the event when the pre-rendered grid is finished being hydrated.
     */
    'onGridHydrate': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the event when the (Esc) key is pressed.
     */
    'onGridKeydownesc': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the event when a page changes in the grid.
     */
    'onGridPagechange': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the event when the grid changes to the first page.
     */
    'onGridPagefirst': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the event when the grid changes to the last page.
     */
    'onGridPagelast': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the event when the grid changes to the next page.
     */
    'onGridPagenext': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the event when the grid changes to the previous page.
     */
    'onGridPageprev': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the event when the `page-size` (amount of rows displaying) changes on the grid.
     */
    'onGridPagesizechange': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the grid ready event when grid is ready.
     */
    'onGridReady': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the event when the grid is refreshed through grid controls or API method `refresh()`.
     */
    'onGridRefresh': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the event once when grid renders.
     */
    'onGridRender': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the event when scrolling occurs in grid.
     */
    'onGridScroll': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the event when a the grid is searched.
     */
    'onGridSearch': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the event when selection is made in the grid.
     */
    'onGridSelect': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the event when selecting every cell (ctrl+a) in the grid.
     */
    'onGridSelectall': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the event before a single cell value is changed.
     */
    'onDataCellBeforechange': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the event after a single cell value is changed.
     */
    'onDataCellChange': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the event every time a new dataset is loaded in the grid.
     */
    'onDataLoad': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the event before a record (row) is changed.
     */
    'onDataRecordBeforechange': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the event before a record (row) is deleted from the grid.
     */
    'onDataRecordBeforedelete': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the event before a new record (row) is added to the grid.
     */
    'onDataRecordBeforeinsert': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the event after a record (row) is changed.
     */
    'onDataRecordChange': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the event when a record (row) is deleted from the grid.
     */
    'onDataRecordDelete': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the event after a new record (row) is added to the grid.
     */
    'onDataRecordInsert': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires event when the insert dialog is opened
     */
    'onDataRecordOpeninsert': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the `row:click` and `record:click` event when a click occurs on a record (row).
     */
    'onRowClick': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the event when mouse is moved out a record (row).
     */
    'onRowMouseout': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the event when mouse is moved over a record (row).
     */
    'onRowMouseover': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires when the row selector changes
     */
    'onRowSelect': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires event when click on a column.
     */
    'onColumnClick': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the event when a column is filtered.
     */
    'onColumnFilter': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires event when mouseout on a column.
     */
    'onColumnMouseout': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires event when mouseover on a column.
     */
    'onColumnMouseover': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the `card:click` and `record:click` event when a click occurs on a record (card).
     */
    'onCardClick': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the event when mouse is moved out a record (card).
     */
    'onCardMouseout': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the event when mouse is moved over a record (card).
     */
    'onCardMouseover': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires the `row:click` and `record:click` event when a click occurs on a record (row).
     */
    'onRecordClick': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires when the mouse cursor leaves the record (row).
     */
    'onRecordMouseout': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires when the mouse cursor enter the record (row).
     */
    'onRecordMouseover': ((this: Window, ev: CustomEvent<any>) => any) | null;

    /**
     * @description Fires event when click on a header cell.
     */
    'onHeaderClick': ((this: Window, ev: CustomEvent<any>) => any) | null;

  }

  declare interface ZingGridEventMap extends HTMLElementEventMap, ZingGridElementEventMap {}

  interface CatchAll {
    [attr: string]: any;
  }

  declare namespace ZingGridAttributes {
    interface ZGBody {
    }

    interface ZGButton {
      /**
       * @description Sets the action of the button
       */
      action?: string;

      /**
       * @description Presence of attribute determines if the button is disabled or not
       */
      disabled?: boolean;

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
       * @description Points to an external template element to be used as the template for the card's editor
       */
      editorTemplate?: string;

      /**
       * @description The return value of the method is set as the innerHTML of `<zg-card>`.  If nothing is returned, 
       * it will not change the currently rendered card. The method takes the paramters `data`, `domCard`, and `rowObject`.
       */
      renderer?: string;

      /**
       * @description Points to an external template element to be used as the template for the card's render.
       */
      rendererTemplate?: string;

    }

    interface ZGCell {
    }

    interface ZGCheckbox {
      /**
       * @description Presence of attribute determines if the checkbox is checked
       */
      checked?: boolean;

    }

    interface ZGColgroup {
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
       * @description The type of `word-break` style for body cells. When not set, `cell-break` style is `normal` by default.  
       * If the width of a column is set, `cell-break` is `word` by default.
       */
      cellBreak?: 'all' | 'ellipsis' | 'normal' | 'word';

      /**
       * @description The class to be set directly on `<zg-cell>` within the column. `cell-class` applied to
       * `<zg-column>` will overwrite the `cell-class` applied to `<zing-grid>`.
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
       * @description Sets the style to use for the tooltips.  Uses the `default` style by default.  Can set to `system` to match the tooltips used on icons throughout `<zing-grid>`.
       */
      cellTooltipType?: 'default' | 'system';

      /**
       * @description Sets the color mode to configure the color picker. Choose between HSL, RGBA, and the default Hex.
       */
      colorMode?: string;

      /**
       * @description Disable the default color swatch UI preview with a false value.
       */
      colorPreview?: boolean;

      /**
       * @description When an additional HTML element is added to the renderer, as in the case of image and url, 
       * `content-style` will be put into a style attribute directly on the element.
       */
      contentStyle?: string;

      /**
       * @description Sets the width of the content inside of the cell. Used on cells of column type
       * `element`, `iframe`, `image`, or `url`.
       */
      contentWidth?: string | number;

      /**
       * @description The data to display in each cell where the data value is null or undefined
       */
      defaultDisplay?: string;

      /**
       * @description Renderer for the details page of a column.
       * To use a custom renderer, the attribute should be set to the name of the function.  
       * The renderer function takes in the following arguments, `value of index` (for each index), `domCell`, and `cellObject`.
       * The returned value of the renderer function is set as the innerHTML of the details dialog.
       */
      detailsRenderer?: string;

      /**
       * @description Points to an external template element to be used as the template for the column's details
       */
      detailsTemplate?: string;

      /**
       * @description Disables the draggable state of a specific column when `draggable` enabled on `<zing-grid>`
       */
      draggable?: 'disabled';

      /**
       * @description Overrides the default editor for the column.  Can be set to a different built-in editor (based on type of column), 
       * custom editor, or `false` to turn off editor. 
       * If set to a custom editor, the attribute value should be set to the name of the object.
       * See "Features" page on "Editing: Custom Editor" for more details on custom editor.
       */
      editor?: string | string;

      /**
       * @description Points to an external template element to be used as the template for the column's editor
       */
      editorTemplate?: string;

      /**
       * @description Overrides the grid level `filter` attribute.  Presence of attribute enables on `filter` column, otherwise
       * set to `disabled` to disable.
       */
      filter?: 'disabled' | boolean;

      /**
       * @description The aggregate function, tokenized string, or function to evaluate for the foot cell of the column.
       * If using a function, the function takes the parameters `columnData` and `columnFieldIndex`.
       */
      footCell?: 'sum' | 'avg' | 'max' | 'min' | 'count' | 'tokenized string' | 'functionName' | string;

      /**
       * @description The aggregate function to evaluate for the head cell of the column.
       * If using a function, the function takes the parameters `columnData` and `columnFieldIndex`.
       */
      headCell?: 'sum' | 'avg' | 'max' | 'min' | 'count' | 'tokenized string' | 'functionName' | string;

      /**
       * @description The header name for the column.   If it is not set, the default is to format the `index` value.
       */
      header?: string;

      /**
       * @description Setting to `disabled` will turn off formatting on the header of the column.  By default, headers will 
       * convert camel, dash, or kebab case to a properly spaced and capitalized string.  Or 
       * set to a function name to customize formatting of header text.  The custom function takes in two parameters, 
       * `index` and `headerText`, and returns the formatted header text.
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
       * @description Sets the style to use for the tooltips.  Uses the `default` style by default.  Can set to `system` to match the tooltips used on icons throughout `<zing-grid>`.
       */
      headerTooltipType?: 'default' | 'system';

      /**
       * @description Presence of attribute hides the column
       */
      hidden?: boolean;

      /**
       * @description A single index or multiple indices (separated by comma), to associate information in the data source
       *  to a column in the grid.  Nested data keys are referenced by the member character `.` (Ex. data.key).
       */
      index?: string;

      /**
       * @description Localization code used with column type `currency` and `number`
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
       * The renderer function takes in the following arguments, `value of index` (for each index), `domCell`, and `cellObject`.
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
       * @description Turns on column resizing for single column.  Set to `disabled` to turn off resizing on a single column.
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
       * @description Modifies the default column resizable persistence.  Set to `disabled` to turn off persistence on a single column.
       */
      resizablePersistent?: boolean;

      /**
       * @description Turns off the search on a column if `search` is present on `<zing-grid>`
       */
      search?: 'disabled';

      /**
       * @description If multiple indices are set, this is the string that separates them in the display.  By default, it is a comma.
       */
      separator?: string;

      /**
       * @description Turns off the sort on a column if `sort` is present on `<zing-grid>`
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
       * passing in method name of sort function instead or setting to `disabled` to disable sorting.  Sorter function
       * takes in two values (a, b) and returns 1, -1, or 0 indicating if `a > b`, `a < b`, or `a = b`.
       * Can also be set to a path in the dataset to perform the sort on.  This is useful for sorting object indices.
       */
      sorter?: string;

      /**
       * @description The type of the data stored in the column.  The column renderer/editor will behave based on the column type.
       */
      type?: 'boolean' | 'button' | 'currency' | 'custom' | 'date' | 'editor' | 'element' | 'email' | 'icon' | 'image' | 'iframe' | 'number' | 'password' | 'range' | 'remover' | 'row-number' | 'select' | 'selector' | 'tel' | 'text' | 'toggle' | 'url';

      /**
       * @description Presence of attribute sets the button to be in a disabled state. Can also set to "true" or "false".
       */
      typeButtonDisabled?: boolean;

      /**
       * @description When the column type is set to `button`, use `typeButtonHander` to hook up a function call to the button click.
       * Callback receives rowData, zg-cell DOM, and zg-cell object as arguments.
       */
      typeButtonHandler?: string;

      /**
       * @description When the column type is set to `button`, use `typeButtonLabel` to add a label to the rendered button in the cell
       */
      typeButtonLabel?: string;

      /**
       * @description When the column type is set to `button`, use `typeButtonIcon` to add an icon next to the rendered button in the cell
       */
      typeButtonLabel?: string;

      /**
       * @description When the column type is set to `button`, use `typeButtonURL` to add a shortcut handler on button click.  The click will automatically open the url in a new window.
       */
      typeButtonUrl?: string;

      /**
       * @description When the column type is set to `checkbox`, use `typeCheckboxLabel` to add a label next to the rendered checkbox in the cell
       */
      typeCheckboxLabel?: string;

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
       * @description Sets the attribute of the custom-element in the column when `<zg-column>` has `type` set to `element`
       */
      typeElementAttributeName?: string;

      /**
       * @description Sets the tag to wrap content when `<zg-column>` has `type` set to `element`.  
       * If `type-element-attribute-name` isn't set, it will put the rendered data into the body of the element.
       * If `type-element-attribute-name` is set, it will set the attribute to the indexed value.
       */
      typeElementTagName?: string;

      /**
       * @description Sets a `square` ratio instead of the default `16:9`
       */
      typeIframeRatio?: 'square';

      /**
       * @description The alternative text used with the `image` type column
       */
      typeImageAlt?: string;

      /**
       * @description The alternative shape to mask the image
       */
      typeImageMask?: 'circle';

      /**
       * @description If the column type is `image`, use the `type-image-src` attribute to set the src for the image.  The src will be the index value by default.
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
       * @description When the column type is set to `radio`, use `typeRadioOptions` to add rendered radio options in the cell.
       * Can also set as array of name/value pairs where the name is displayed for the given value
       */
      typeRadioOptions?: any[] | string;

      /**
       * @description Maximum value for the input box. Used with the `range` type column in edit mode.
       */
      typeRangeMax?: number;

      /**
       * @description Minimum value for the input box.  Used with `range` type column in edit mode.
       */
      typeRangeMin?: number;

      /**
       * @description Specifies the step between each legal value for the input box.  Used with `range` type column in edit mode.
       */
      typeRangeStep?: number;

      /**
       * @description In edit mode, presence of attribute allows column type `select` to have multiple selections, instead of the default
       * of a single selection
       */
      typeSelectMultiple?: boolean;

      /**
       * @description To set the options for the select box for a `select` column when `editor` is enabled on `<zing-grid>`.
       * Can also set as array of name/value pairs where the name is displayed for the given value
       */
      typeSelectOptions?: string | any[];

      /**
       * @description When the column type is set to `toggle`, use `typeToggleOptions` to set the list of options for the display.
       */
      typeToggleOptions?: any[];

      /**
       * @description When the column type is set, the render and value will be the same.  This prevents the default creating of true/false for toggles.
       */
      typeToggleRenderValue?: boolean;

      /**
       * @description If the column type is `url`, use this attribute to reference any `<zg-icon>` within the library
       * to replace the link text with this icon.
       */
      typeUrlIcon?: 'link' | 'outsidearrow';

      /**
       * @description If the column type is `url`, use the `type-url-src` attribute to set the src for the link.  The link will be the index value by default.
       */
      typeUrlSrc?: string;

      /**
       * @description If the column type is `url`, use the `type-url-text` attribute to set the text displayed for the link.
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
       * @description Used in the case of automatically removing columns on resize.  Columns without a `visibility-priority` never
       * gets removed. The rest of the columns are removed from highest `visibility-priority` value to the lowest.
       */
      visibilityPriority?: number;

      /**
       * @description Sets the width of the column.
       */
      width?: 'fit' | 'fitheader' | 'fitcontent' | 'stretch' | '10%' | '150px' | '150' | string | number;

    }

    interface ZGControlBar {
    }

    interface ZGData {
      /**
       * @description Adapter is a shortcut to set known options for specific third party datasets.  Currently supports `graphql` and  `firebase`.
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
       * @description Used to set `<zg-param>`, the configuration data for `<zg-data>`.  This should never be used directly as an attribute and 
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
       * @description The presence of the specification-standard `open` attribute designates whether the dialog is shown or hidden
       */
      open?: string;

    }

    interface ZGEditorRow {
    }

    interface ZGFocus {
    }

    interface ZGFoot {
    }

    interface ZGFooter {
    }

    interface ZGHead {
    }

    interface ZGHeadCell {
    }

    interface ZGHeader {
    }

    interface ZGIcon {
      /**
       * @description Sets the icon type of `<zg-icon>`
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

    interface ZGLayoutControls {
    }

    interface ZGLoadMask {
    }

    interface ZGMenu {
      /**
       * @description Presence of attribute replaces the default context menu with a custom menu.
       * If `replace` is not set, the custom menu will be appended to the end of the default menu.
       */
      replace?: boolean;

    }

    interface ZGMenuGroup {
    }

    interface ZGMenuItem {
    }

    interface ZGNoData {
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
       * @description Determines max number of page buttons to display.  Default is 5.
       */
      pagerButtonLimit?: number;

      /**
       * @description Determines which type of pagination to use, input or buttons
       */
      pagerType?: string;

      /**
       * @description Indicates where to position the pager
       */
      position?: string;

      /**
       * @description Sets the options for page size in `zg-option-list`
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

    interface ZGRow {
    }

    interface ZGSearch {
    }

    interface ZGSelectorMask {
    }

    interface ZGSeparator {
    }

    interface ZGSource {
      /**
       * @description Indicates where to position the source
       */
      position?: string;

    }

    interface ZGStatus {
    }

    interface ZGText {
      /**
       * @description Specifies what value to generate in text field.  Current built-in options are 
       * pager-related information.
       */
      value?: string;

    }

    interface ZGTooltip {
    }

    interface ZingGrid {
      /**
       * @description Aligns the contents of all column's cells
       */
      align?: 'center' | 'left' | 'right';

      /**
       * @description The caption for the grid
       */
      caption?: string;

      /**
       * @description Specifies the defined `<zg-card>` of the grid.  More appropriate to use `<zg-card>` in most cases or set the property programmatically.
       */
      card?: any;

      /**
       * @description The type of `word-break` style for body cells. When not set, `cell-break` style is `normal` by default.  
       * If the width of a column is set, `cell-break` is `word` by default.
       * To overwrite `cell-break` for cells in a specific column, set `cell-break` for that column.
       */
      cellBreak?: 'all' | 'ellipsis' | 'normal' | 'word';

      /**
       * @description Adds a class to each `<zg-cell>` in the grid. This attribute can be applied to both 
       * `<zing-grid>` or `<zg-column>`. If the attribute is applied to both, `<zg-column>`'s `cell-class` overwrites `<zing-grid>`'s `cell-class`.
       * To set a class conditionally, set `cell-class` to the name of the function, which takes in the arguments: `cellData`, `domContainer`, `cellObject`.
       */
      cellClass?: string;

      /**
       * @description Turns cell editing on or off. Automatically turned on when setting `editor` or `editor-controls`.
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
       * @description Sets the style to use for the tooltips.  Uses the `default` style by default.  Can set to `system` to match the tooltips used on icons throughout `<zing-grid>`.
       */
      cellTooltipType?: 'default' | 'system';

      /**
       * @description Adds a class to each `<zg-cell>` in targeted `<zg-column>`. To
       * apply a class conditionally, set the value to the name of the function to run 
       * on each cell value. The function takes the parameters `fieldIndex`, `domContainer`,
       * and `colObject`, and returns a string which is the class name to apply.
       */
      colClass?: string;

      /**
       * @description Presence of attribute turns on column resizing for all columns
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
       * @description Specifies the columns of the grid.  More appropriate to use `<zg-column>` in most cases or set the property programmatically.
       */
      columns?: ZingGridAttributes.ZGColumn[];

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
       * @description Enables the default `<zing-grid>` context menu or set to the id name of a custom `<zg-menu>`.  If
       * set to a custom menu and `<zg-menu>` has the `replace` attribute present, then the custom menu will replace the context menu.  
       * Otherwise the contents of the custom menu is appended to the end of context menu.
       */
      contextMenu?: string | boolean;

      /**
       * @description Data for the grid presented as an array or object
       */
      data?: any;

      /**
       * @description The data to display in each cell where the data value is null or undefined
       */
      defaultDisplay?: string;

      /**
       * @description Sets `<zg-dialog>` to display dialog and mask within the grid dimensions instead of the whole screen
       */
      dialog?: boolean;

      /**
       * @description The HTML standard direction to indicate direction of grid's columns and text
       */
      dir?: 'ltr' | 'rtl';

      /**
       * @description Specifies the action of dragging allowed.  By default, if `draggable` is 
       * enabled then `drag-action` is set `"both"`.  This property has no meaning if `draggable` is not enabled.
       */
      dragAction?: 'reorder' | 'hide' | 'both';

      /**
       * @description Enables column and/or row dragging
       */
      draggable?: 'rows' | 'columns' | 'both';

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
       * @description Enables filtering for all columns.  Can be turned on/off individually via column.
       */
      filter?: boolean;

      /**
       * @description Adds a class to each `<zg-cell>` in the `<zg-foot>`. To
       * apply a class conditionally, set the value to the name of the function to run 
       * on each cell value. The function takes the parameters `fieldIndex`, `domContainer`,
       * and `colObject`, and returns a string which is the class name to apply.
       */
      footClass?: string;

      /**
       * @description Sets vertical, horizontal or both grid lines to the grid
       */
      gridlines?: 'both' | 'horz' | 'horizontal' | 'vert' | 'vertical';

      /**
       * @description Adds a class to each `<zg-cell>` in the `<zg-head>`. To
       * apply a class conditionally, set the value to the name of the function to run 
       * on each cell value. The function takes the parameters `fieldIndex`, `domContainer`,
       * and `colObject`, and returns a string which is the class name to apply.
       */
      headClass?: string;

      /**
       * @description Converts camel, dash, and kebab case to properly spaced and capitalized typography. Setting to `disabled` will turn off formatting on headers.  Set to a function name to customize formatting of headers.
       */
      headerAutoFormat?: string;

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
       * @description Sets the style to use for the tooltips.  Uses the `default` style by default.  Can set to `system` to match the tooltips used on icons throughout `<zing-grid>`.
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
       * @description If setting [icon-set="custom"], points to the custom JSON key/value mapping
       */
      iconSetData?: string;

      /**
       * @description Sets the language to use for the grid
       */
      lang?: string;

      /**
       * @description Sets the grid layout to be either `card` or `row` and adds `<zg-layout-controls>` to the grid.
       * The default is based on the size of the user's screen, unless `layout` is set.
       */
      layout?: 'card' | 'row';

      /**
       * @description When `layout` is set, by default `layout-controls` is enabled.  
       * To hide, set `layout-controls` to `disabled`.  Presence of this attribute will enable
       * `<zg-layout-controls>` even if `layout` is not set.
       */
      layoutControls?: 'disabled' | boolean;

      /**
       * @description Presence of attribute adds loading state to grid, which triggers `<zg-load-mask>` to show.
       * This attribute allows styling the height of the grid (via CSS) before the data has loaded in the grid.
       */
      loading?: boolean;

      /**
       * @description Sets the text to display in the `<zg-load-mask>` on data load
       */
      loadingText?: string;

      /**
       * @description Set `loadmask="disabled"` to prevent the `<zg-load-mask>` from showing on data load.
       */
      loadmask?: 'disabled';

      /**
       * @description Sets the message that appears in the `<zg-no-data>` element when there are no records
       */
      noData?: string;

      /**
       * @description Sets the number of records or rows to display per page. Can be set only if `pager` is set.
       */
      pageSize?: number;

      /**
       * @description Sets the number of cards to display per page when in card mode. Can be set only if `pager` is set.
       */
      pageSizeCard?: number;

      /**
       * @description Sets the options for page size in `zg-option-list`. Can be set only if `pager` is set.
       */
      pageSizeOptions?: string;

      /**
       * @description Sets the number of rows to display per page when in row mode. Can be set only if `pager` is set.
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
       * @description Sets pager position. Note: `pager` attribute or `<zg-pager>` must be present in
       * order to position pager.
       */
      pagerPosition?: 'top' | 'bottom';

      /**
       * @description Determines which type of pagination to use, input or buttons
       */
      pagerType?: 'button-text' | 'button-arrows';

      /**
       * @description Name/Value pairs of `<zg-param>` values.  More appropriate to use `<zg-param>` in most cases.
       */
      params?: any;

      /**
       * @description Sets the total record count.  Useful for `loadByPage` when the response packet
       * does not return total count of records.
       */
      recordCount?: number;

      /**
       * @description Adds a class to each `<zg-row>` element. To
       * apply a class conditionally, set the value to the name of the function to run 
       * on each cell value. The function takes the parameters `data`, `rowIndex` (1-based),
       *  `domRow`, and `rowObject`, and returns a string which is the class name to apply.
       */
      rowClass?: string;

      /**
       * @description Adds `selector` type column to the rows as the first column
       */
      rowSelector?: boolean;

      /**
       * @description Turns on the search feature and adds `<zg-search>` to the grid.  
       * The search button appears in the caption header.
       */
      search?: boolean;

      /**
       * @description Turns on the selector feature on the grid and adds
       * `<zg-selector-mask>` to the grid
       */
      selector?: boolean;

      /**
       * @description Indicates that the grid was completely rendered on the server and embedded in the page
       */
      serverRendered?: boolean;

      /**
       * @description Enables sorting on all columns.  It is possible to disable specific columns 
       * via the column's object or setting `sort="disabled"` to specified columns.
       */
      sort?: boolean;

      /**
       * @description Overrides default behavior for international sorting.  Turn off international sorting with `sort-intl="disabled"`.
       */
      sortIntl?: 'disabled';

      /**
       * @description Override the column sorting by passing in method name of sort function instead.  Sorter function
       * takes in two values (a, b) and returns 1, -1, or 0 indicating if `a > b`, `a < b`, or `a = b`.
       */
      sorter?: string;

      /**
       * @description Defines the source of the data in the grid. Adds the `<zg-source>` element.
       */
      source?: string;

      /**
       * @description Specifies the absolute or relative URL to fetch data from to populate the grid
       */
      src?: string;

      /**
       * @description Adds a display button that launches the contextmenu.
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
       * names are also accepted by setting a URL path to your custom css theme file.  For custom themes, on load set `theme` 
       * to the path to the custom theme file.  After, set to theme name to switch themes.
       */
      theme?: 'android' | 'black' | 'default' | 'dark' | 'ios' | 'urlToThemeFile' | 'customThemeName' | string;

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
       * @description Keeps current value of `viewport` and freezes the breakpoint
       */
      viewportPause?: boolean;

      /**
       * @description Removes `viewport` attribute, disabling viewport resizing
       */
      viewportStop?: boolean;

      /**
       * @description Sets custom `viewport` breakpoints (value string-object must be valid JSON).  
       * NOTE: If you don't set `mobile`, the grid won't auto-set card or row mode.
       */
      viewportTypes?: string;

      /**
       * @description Sets the width of the grid.  If the width is less than the size of the content, scroll is added to `<zg-body>`.
       */
      width?: string | number;

      /**
       * @description Presence of attribute adds the classes, `zebra-1` and `zebra-2`, alternating on `<zg-row>` elements.  Setting to a 
       * list of class names will assign classes in sequential order.  For conditional zebra classes, `zebra` also accepts name of function that 
       * returns a class name to use for zebra striping.
       */
      zebra?: string;

    }

  }

  declare interface ZingGridConfig extends ZingGridAttributes.ZingGrid {}

  declare interface ZGBody extends ZingGridAttributes.ZGBody, CatchAll, HTMLElement {}

  declare interface ZGButton extends ZingGridAttributes.ZGButton, CatchAll, HTMLElement {}

  declare interface ZGCaption extends ZingGridAttributes.ZGCaption, CatchAll, HTMLElement {}

  declare interface ZGCard extends ZingGridAttributes.ZGCard, CatchAll, HTMLElement {}

  declare interface ZGCell extends ZingGridAttributes.ZGCell, CatchAll, HTMLElement {}

  declare interface ZGCheckbox extends ZingGridAttributes.ZGCheckbox, CatchAll, HTMLElement {}

  declare interface ZGColgroup extends ZingGridAttributes.ZGColgroup, CatchAll, HTMLElement {}

  declare interface ZGColumn extends ZingGridAttributes.ZGColumn, CatchAll, HTMLElement {}

  declare interface ZGControlBar extends ZingGridAttributes.ZGControlBar, CatchAll, HTMLElement {}

  declare interface ZGData extends ZingGridAttributes.ZGData, CatchAll, HTMLElement {}

  declare interface ZGDialog extends ZingGridAttributes.ZGDialog, CatchAll, HTMLElement {}

  declare interface ZGEditorRow extends ZingGridAttributes.ZGEditorRow, CatchAll, HTMLElement {}

  declare interface ZGFocus extends ZingGridAttributes.ZGFocus, CatchAll, HTMLElement {}

  declare interface ZGFoot extends ZingGridAttributes.ZGFoot, CatchAll, HTMLElement {}

  declare interface ZGFooter extends ZingGridAttributes.ZGFooter, CatchAll, HTMLElement {}

  declare interface ZGHead extends ZingGridAttributes.ZGHead, CatchAll, HTMLElement {}

  declare interface ZGHeadCell extends ZingGridAttributes.ZGHeadCell, CatchAll, HTMLElement {}

  declare interface ZGHeader extends ZingGridAttributes.ZGHeader, CatchAll, HTMLElement {}

  declare interface ZGIcon extends ZingGridAttributes.ZGIcon, CatchAll, HTMLElement {}

  declare interface ZGInput extends ZingGridAttributes.ZGInput, CatchAll, HTMLElement {}

  declare interface ZGLayoutControls extends ZingGridAttributes.ZGLayoutControls, CatchAll, HTMLElement {}

  declare interface ZGLoadMask extends ZingGridAttributes.ZGLoadMask, CatchAll, HTMLElement {}

  declare interface ZGMenu extends ZingGridAttributes.ZGMenu, CatchAll, HTMLElement {}

  declare interface ZGMenuGroup extends ZingGridAttributes.ZGMenuGroup, CatchAll, HTMLElement {}

  declare interface ZGMenuItem extends ZingGridAttributes.ZGMenuItem, CatchAll, HTMLElement {}

  declare interface ZGNoData extends ZingGridAttributes.ZGNoData, CatchAll, HTMLElement {}

  declare interface ZGPager extends ZingGridAttributes.ZGPager, CatchAll, HTMLElement {}

  declare interface ZGParam extends ZingGridAttributes.ZGParam, CatchAll, HTMLElement {}

  declare interface ZGRow extends ZingGridAttributes.ZGRow, CatchAll, HTMLElement {}

  declare interface ZGSearch extends ZingGridAttributes.ZGSearch, CatchAll, HTMLElement {}

  declare interface ZGSelectorMask extends ZingGridAttributes.ZGSelectorMask, CatchAll, HTMLElement {}

  declare interface ZGSeparator extends ZingGridAttributes.ZGSeparator, CatchAll, HTMLElement {}

  declare interface ZGSource extends ZingGridAttributes.ZGSource, CatchAll, HTMLElement {}

  declare interface ZGStatus extends ZingGridAttributes.ZGStatus, CatchAll, HTMLElement {}

  declare interface ZGText extends ZingGridAttributes.ZGText, CatchAll, HTMLElement {}

  declare interface ZGTooltip extends ZingGridAttributes.ZGTooltip, CatchAll, HTMLElement {}

  declare class ZingGrid {
    constructor(config: ZingGridConfig, ref: HTMLElement | Element);
    constructor(ref: HTMLElement | Element, config: ZingGridConfig);

    addEventListener<K extends keyof ZingGridEventMap>(type: K, listener: (this: ZingGrid, ev: GridEventMap[K]) => void, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ZingGridEventMap>(type: K, listener: (this: ZingGrid, ev: GridEventMap[K]) => void, options?: boolean | EventListenerOptions): void;


    // ZGDialog
    /**
     * @description Customizes the user's dialog
     * @param type The type of dialog to customize.  If you set as null, the config will be applied to all dialogs.
 * Options are:
 * <ul>
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
 * <li>title: The Title to display on the Dialog
 * </ul>
     */
    customizeDialog: (type: string, config: any) => ZingGrid;


    // ZGColumn
    /**
     * @description Fetches the targeted column.
     * @param fieldIndex Field index of column to fetch.
     */
    column: (fieldIndex: any[]) => any;

    /**
     * @description Filters the column specified by column index. Note: `filter` attribute must be present for
 * this method to work.
     * @param columnIndex Index of column.
     * @param filter Filter string.
     */
    filterColumn: (columnIndex: string, filter: string) => ZingGrid;

    /**
     * @description Gets the value of the `col-class` attribute
     */
    getColClass: () => string;

    /**
     * @description Gets the value of the `header-auto-format` attribute
     */
    getHeaderAutoFormat: () => boolean;

    /**
     * @description Hides a column based on index
     * @param columnIndex Index of column to hide
     */
    hideColumn: (columnIndex: string) => ZingGrid;

    /**
     * @description Sets the `col-class` attribute
     * @param type Class name or function name
     */
    setColClass: (type: string) => ZingGrid;

    /**
     * @description Sets the `columns` property
     * @param columns Array of column objects
     */
    setColumns: (columns: any[]) => ZingGrid;

    /**
     * @description Sets the `columns-control` attribute
     * @param activate Value to add or remove
     */
    setColumnsControl: (activate: boolean) => ZingGrid;

    /**
     * @description Sets the `header-auto-format` attribute
     * @param activate Value to add or remove
     */
    setHeaderAutoFormat: (activate: boolean) => ZingGrid;

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


    // ZGSelector
    /**
     * @description Returns an array of selected rows
     */
    getSelectedRows: () => any[];

    /**
     * @description Gets the value of the `selector` attribute
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
     * @description Sets the `selector` attribute
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
     * @description Gets the current `page-size`
     */
    getPageSize: () => number;

    /**
     * @description Gets the value of the `page-size-card` attribute
     */
    getPageSizeCard: () => string;

    /**
     * @description Gets the value of the `page-size-row` attribute
     */
    getPageSizeRow: () => string;

    /**
     * @description Gets the value of the `pager` attribute
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
     * @description Sets the `pager` attribute
     * @param activate Value to add or remove
     */
    setPager: (activate: boolean) => ZingGrid;


    // ZGCaption
    /**
     * @description Gets the value of the `caption` attribute
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
 * <ul>
 * <li>csv: Boolean indicating if it should be sent as a csv string.  Default is false.</li>
 * <li>headers: Boolean indicating if headers should be included.  Default is false.
 *              Only applies to csv or JSON array of arrays as JSON objects  have a key already.</li>
 * <li>cols: String indicating if we should return all columns or only visible.  'all' or 'visible' are options.
 * <li>rows: String indicating if we should return all rows or only filtered/searched.  'all' or 'visible' are options.
 * </ul>
     */
    getData: (config?: any) => any[] | any;

    /**
     * @description Gets the value of the `src` attribute
     */
    getSrc: () => string;

    /**
     * @description Gets the value of the `template-end-delimiter` attribute
     */
    getTemplateEndDelimiter: () => string;

    /**
     * @description Gets the value of the `template-start-delimiter` attribute
     */
    getTemplateStartDelimiter: () => string;

    /**
     * @description Inserts a new row into the grid
     * @param data Data to insert into new row
     * @param id If the id is already set on the new record, pass it in here
     * @param noDataSource If you only want to do a local insert, set `noDataSource` to "true"
     */
    insertRow: (data: any, id: string, noDataSource: boolean) => ZingGrid;

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
     * @param noDataSource If you only want to remove from the grid and not the external datasource, set `noDataSource` to "true"
     */
    removeRecord: (id: string, noDataSource: boolean) => ZingGrid;

    /**
     * @description Removes a row from the grid
     * @param rowIndex Row index (0 based) of the record to remove
     * @param noDataSource If you only want to remove from the grid and not the external datasource, set `noDataSource` to "true"
     */
    removeRow: (rowIndex: string, noDataSource: boolean) => ZingGrid;

    /**
     * @description Sets or updates the dataset for the grid
     * @param data JSON data
     */
    setData: (data: any[] | any) => ZingGrid;

    /**
     * @description Sets the `src` attribute
     * @param src Value to indicate a path to a remote data source
     */
    setSrc: (src: string) => ZingGrid;

    /**
     * @description Sets the `template-end-delimiter` attribute
     * @param delim Value to indicate regex expression for closing data binding
     */
    setTemplateEndDelimiter: (delim: string) => ZingGrid;

    /**
     * @description Sets the `template-start-delimiter` attribute
     * @param delim Value to indicate regex expression for opening data binding
     */
    setTemplateStartDelimiter: (delim: string) => ZingGrid;

    /**
     * @description Updates a cell in the grid
     * @param id ID of the record to update
     * @param fieldIndex Field index of the cell to update
     * @param val New Value
     * @param noDataSource If you only want to update the grid and not the external datasource, set `noDataSource` to "true"
     */
    updateCellByID: (id: number, fieldIndex: number, val: any, noDataSource: boolean) => ZingGrid;

    /**
     * @description Updates a cell in the grid
     * @param rowIndex Row index (0 based) of the cell to update
     * @param columnIndex Column index (0 based) of the cell to update
     * @param val New Value
     * @param noDataSource If you only want to update the grid and not the external datasource, set `noDataSource` to "true"
     */
    updateCellByPosition: (rowIndex: number, columnIndex: number, val: any, noDataSource: boolean) => ZingGrid;

    /**
     * @description Updates a record in the grid
     * @param id ID of the record to update
     * @param data Data to update
     * @param noDataSource If you only want to update the grid and not the external datasource, set `noDataSource` to "true"
     */
    updateRecord: (id: string, data: any, noDataSource: boolean) => ZingGrid;

    /**
     * @description Updates a row in the grid
     * @param rowIndex Row index (0 based) of the record to update
     * @param data Data to update
     * @param noDataSource If you only want to update the grid and not the external datasource, set `noDataSource` to "true"
     */
    updateRow: (rowIndex: string, data: any, noDataSource: boolean) => ZingGrid;


    // ZGSearch
    /**
     * @description Gets the value of the `search` attribute
     */
    getSearch: () => boolean;

    /**
     * @description Searches the grid with the search term indicated
     * @param search Search term
     */
    searchGrid: (search: string) => ZingGrid;

    /**
     * @description Sets the `search` attribute
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
     * @description Get the value of the `cell-break` attribute.
     */
    getCellBreak: () => string;

    /**
     * @description Gets the value of the `cell-class` attribute
     */
    getCellClass: () => string;

    /**
     * @description Fetches all cells
     */
    getCells: () => any[];

    /**
     * @description Gets the value of the `default-display` attribute
     */
    getDefaultDisplay: () => string | boolean;

    /**
     * @description Gets the value of the `draggable` attribute
     */
    getDraggable: () => string;

    /**
     * @description Sets the `cell-break` attribute
     * @param type Type of cell-break
     */
    setCellBreak: (type: 'all' | 'ellipsis' | 'word') => ZingGrid;

    /**
     * @description Sets the `cell-class` attribute
     * @param type Class name or function name
     */
    setCellClass: (type: string) => ZingGrid;

    /**
     * @description Sets the `default-display` attribute
     * @param value Value to use as default cell display if data is undefined or null
     */
    setDefaultDisplay: (value: string) => ZingGrid;


    // ZGRow
    /**
     * @description Gets the value of the `row-class` attribute
     */
    getRowClass: () => string;

    /**
     * @description Gets the value of the `zebra` attribute
     */
    getZebra: () => string;

    /**
     * @description Fetches the targeted row.
     * @param rowContainerIndex The index of the row to fetch.
     */
    row: (rowContainerIndex: number) => any;

    /**
     * @description Sets the `row-class` attribute
     * @param type Class name or function name
     */
    setRowClass: (type: string) => ZingGrid;

    /**
     * @description Sets the `zebra` attribute
     * @param type Class name or function name
     */
    setZebra: (type: string) => ZingGrid;


    // ZGMenu
    /**
     * @description Closes currently opened contextmenu.
     */
    closeContextMenu: () => ZingGrid;

    /**
     * @description Gets the value of the `columns-control` attribute
     */
    getColumnsControl: () => boolean;

    /**
     * @description Gets the value of the `context-menu` attribute
     */
    getContextMenu: () => string | boolean;

    /**
     * @description Gets the value of the `static-menu` attribute
     */
    getStaticMenu: () => string;

    /**
     * @description Sets the `context-menu` attribute.
     * @param types Boolean value to indicate add or remove, or string value to indicate reference to id of context-menu.
     */
    setContextMenu: (types: boolean | string) => ZingGrid;

    /**
     * @description Sets the `static-menu` attribute
     * @param activate Value to add or remove
     */
    setStaticMenu: (activate: boolean) => ZingGrid;


    // ZingGrid
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
     * @description Gets the value of the `compact` attribute
     */
    getCompact: () => string | boolean;

    /**
     * @description Gets the dir setting for the grid
     */
    getDir: () => string;

    /**
     * @description Gets the value of the `drag-action` attribute
     */
    getDragAction: () => string;

    /**
     * @description Gets the value of the `gridlines` attribute
     */
    getGridlines: () => string;

    /**
     * @description Gets the value of the `height` attribute
     */
    getHeight: () => string;

    /**
     * @description Gets the language used on the grid
     */
    getLang: () => string;

    /**
     * @description Gets the value of the `width` attribute
     */
    getWidth: () => string;

    /**
     * @description Sets the `compact` attribute
     * @param activate Value to add or remove
     */
    setCompact: (activate: boolean) => ZingGrid;

    /**
     * @description Sets the `dir` attribute
     * @param type Type of dir
     */
    setDir: (type: 'ltr' | 'rtl') => ZingGrid;

    /**
     * @description Sets the `drag-action` attribute
     * @param type Type of drag to enable
     */
    setDragAction: (type: 'reorder' | 'remove' | 'both') => ZingGrid;

    /**
     * @description Sets the `draggable` attribute
     * @param activate Boolean value to indicate add or remove, or string value to indicate the draggable type.
     */
    setDraggable: (activate: boolean | 'true' | 'false' | 'rows' | 'columns' | 'both') => ZingGrid;

    /**
     * @description Sets the `gridlines` attribute
     * @param type Type of gridlines to set on the grid
     */
    setGridlines: (type: 'both' | 'horz' | 'horizontal' | 'vert' | 'vertical') => ZingGrid;

    /**
     * @description Sets the `height` attribute
     * @param height Value setting the height of the grid
     */
    setHeight: (height: number) => ZingGrid;

    /**
     * @description Sets the `lang` attribute
     * @param lang Language to set on the grid
     */
    setLang: (lang: string) => ZingGrid;

    /**
     * @description Sets the `record-count` attribute
     * @param count Value setting the count
     */
    setRecordCount: (count: number) => ZingGrid;

    /**
     * @description Sets the `width` attribute
     * @param width Value setting the width of the grid
     */
    setWidth: (width: number) => ZingGrid;

    /**
     * @description Forces a resize event to be triggered and to partially repaint the grid. Useful when the container updates size without the window updating.
     */
    updateSize: () => ZingGrid;


    // ZGEditor
    /**
     * @description Gets the value of the `editor` attribute
     */
    getEditor: () => string;

    /**
     * @description Gets the value of the `editor-controls` attribute
     */
    getEditorControls: () => string;

    /**
     * @description Gets the value of the `row-selector` attribute
     */
    getRowSelector: () => boolean;

    /**
     * @description Sets the `editor` attribute
     * @param activate Boolean value to indicate add or remove, or string value to indicate the editor type
     */
    setEditor: (activate: boolean | string) => ZingGrid;

    /**
     * @description Sets the `editor-controls` attribute
     * @param types Boolean value to indicate add or remove, or string value to indicate what editor controls to add
     */
    setEditorControls: (types: boolean | string) => ZingGrid;

    /**
     * @description Sets the `row-selector` attribute
     * @param activate Value to add or remove
     */
    setRowSelector: (activate: boolean) => ZingGrid;


    // ZGFilter
    /**
     * @description Gets the value of the `filter` attribute
     */
    getFilter: () => boolean;

    /**
     * @description Sets the `filter` attribute
     * @param activate Value to add or remove
     */
    setFilter: (activate: boolean) => ZingGrid;


    // ZGFoot
    /**
     * @description Gets the value of the `foot-class` attribute
     */
    getFootClass: () => string;

    /**
     * @description Sets the `foot-class` attribute
     * @param type class name or function name
     */
    setFootClass: (type: string) => ZingGrid;


    // ZGHead
    /**
     * @description Gets the value of the `head-class` attribute
     */
    getHeadClass: () => string;

    /**
     * @description Sets the `head-class` attribute
     * @param type Class name or function name
     */
    setHeadClass: (type: string) => ZingGrid;


    // ZGIcon
    /**
     * @description Gets the value of the `icon-set` attribute
     */
    getIconSet: () => string;

    /**
     * @description Sets the `icon-set` attribute
     * @param type Icon set to use in the grid
     */
    setIconSet: (type: string) => ZingGrid;


    // ZGLayout
    /**
     * @description Gets the value of the `layout` attribute
     */
    getLayout: () => string;

    /**
     * @description Gets the value of the `layout-controls` attribute
     */
    getLayoutControls: () => string;

    /**
     * @description Sets the `layout` attribute
     * @param type Value to indicate the grid layout
     */
    setLayout: (type: 'row' | 'card') => ZingGrid;

    /**
     * @description Sets the `layout-controls` attribute
     * @param activate Value to add or remove
     */
    setLayoutControls: (activate: boolean) => ZingGrid;


    // ZGNoData
    /**
     * @description Gets the value of the `no-data` attribute
     */
    getNodata: () => string;

    /**
     * @description Sets the `no-data` attribute
     * @param value Message to display when there is no data
     */
    setNoData: (value: string) => ZingGrid;


    // ZGSorter
    /**
     * @description Gets the value of the `sort` attribute
     */
    getSort: () => string;

    /**
     * @description Gets the value of the `sorter` attribute
     */
    getSorter: () => string;

    /**
     * @description Sets the `sort` attribute
     * @param types Boolean value to indicate add or remove
     */
    setSort: (types: boolean) => ZingGrid;

    /**
     * @description Sets the `sorter` attribute
     * @param types String value to indicate reference to custom sorter function
     */
    setSorter: (types: boolean | string) => ZingGrid;


    // ZGSource
    /**
     * @description Gets the value of the `source` attribute
     */
    getSource: () => string;

    /**
     * @description Sets the `source` attribute. Not to be confused with `src` attribute, the `source` attribute is for citation.
     * @param value Source of the data in the grid
     */
    setSource: (value: string) => ZingGrid;


    // ZGTheme
    /**
     * @description Gets the value of the `theme` attribute
     */
    getTheme: () => string;

    /**
     * @description Sets the `theme` attribute
     * @param theme Value to indicate which theme to set
     */
    setTheme: (theme: string) => ZingGrid;


    // ZGViewport
    /**
     * @description Gets the value of the `viewport` attribute
     */
    getViewport: () => string;

    /**
     * @description Gets the value of the `viewport-pause` attribute
     */
    getViewportPause: () => boolean;

    /**
     * @description Gets the value of the `viewport-stop` attribute
     */
    getViewportStop: () => boolean;

    /**
     * @description Gets the value of the `viewport-types` attribute
     */
    getViewportTypes: () => string;

    /**
     * @description Sets the `viewport-pause` attribute
     * @param activate Value to add or remove
     */
    setViewportPause: (activate: boolean) => ZingGrid;

    /**
     * @description Sets the `viewport-stop` attribute
     * @param activate Value to add or remove
     */
    setViewportStop: (activate: boolean) => ZingGrid;


    // ZGCard
    /**
     * @description Sets the id to reference an external `template` to be used as `<zg-card>`
     * @param id Value of id to use the card template.
     */
    setCardTemplate: (id: string) => ZingGrid;

  }

  declare interface ZingGrid extends ZingGridAttributes.ZingGrid, CatchAll, HTMLElement {}

}

interface HTMLElementTagNameMap {
  'zg-body': ZG.ZGBody;
  'zg-button': ZG.ZGButton;
  'zg-caption': ZG.ZGCaption;
  'zg-card': ZG.ZGCard;
  'zg-cell': ZG.ZGCell;
  'zg-checkbox': ZG.ZGCheckbox;
  'zg-colgroup': ZG.ZGColgroup;
  'zg-column': ZG.ZGColumn;
  'zg-control-bar': ZG.ZGControlBar;
  'zg-data': ZG.ZGData;
  'zg-dialog': ZG.ZGDialog;
  'zg-editor-row': ZG.ZGEditorRow;
  'zg-focus': ZG.ZGFocus;
  'zg-foot': ZG.ZGFoot;
  'zg-footer': ZG.ZGFooter;
  'zg-head': ZG.ZGHead;
  'zg-head-cell': ZG.ZGHeadCell;
  'zg-header': ZG.ZGHeader;
  'zg-icon': ZG.ZGIcon;
  'zg-input': ZG.ZGInput;
  'zg-layout-controls': ZG.ZGLayoutControls;
  'zg-load-mask': ZG.ZGLoadMask;
  'zg-menu': ZG.ZGMenu;
  'zg-menu-group': ZG.ZGMenuGroup;
  'zg-menu-item': ZG.ZGMenuItem;
  'zg-no-data': ZG.ZGNoData;
  'zg-pager': ZG.ZGPager;
  'zg-param': ZG.ZGParam;
  'zg-row': ZG.ZGRow;
  'zg-search': ZG.ZGSearch;
  'zg-selector-mask': ZG.ZGSelectorMask;
  'zg-separator': ZG.ZGSeparator;
  'zg-source': ZG.ZGSource;
  'zg-status': ZG.ZGStatus;
  'zg-text': ZG.ZGText;
  'zg-tooltip': ZG.ZGTooltip;
  'zing-grid': ZG.ZingGrid;
}

declare namespace JSX {
  interface IntrinsicElements {
    'zg-body': KebabKeys<ZG.ZingGridAttributes.ZGBody> | ZG.CatchAll;
    'zg-button': KebabKeys<ZG.ZingGridAttributes.ZGButton> | ZG.CatchAll;
    'zg-caption': KebabKeys<ZG.ZingGridAttributes.ZGCaption> | ZG.CatchAll;
    'zg-card': KebabKeys<ZG.ZingGridAttributes.ZGCard> | ZG.CatchAll;
    'zg-cell': KebabKeys<ZG.ZingGridAttributes.ZGCell> | ZG.CatchAll;
    'zg-checkbox': KebabKeys<ZG.ZingGridAttributes.ZGCheckbox> | ZG.CatchAll;
    'zg-colgroup': KebabKeys<ZG.ZingGridAttributes.ZGColgroup> | ZG.CatchAll;
    'zg-column': KebabKeys<ZG.ZingGridAttributes.ZGColumn> | ZG.CatchAll;
    'zg-control-bar': KebabKeys<ZG.ZingGridAttributes.ZGControlBar> | ZG.CatchAll;
    'zg-data': KebabKeys<ZG.ZingGridAttributes.ZGData> | ZG.CatchAll;
    'zg-dialog': KebabKeys<ZG.ZingGridAttributes.ZGDialog> | ZG.CatchAll;
    'zg-editor-row': KebabKeys<ZG.ZingGridAttributes.ZGEditorRow> | ZG.CatchAll;
    'zg-focus': KebabKeys<ZG.ZingGridAttributes.ZGFocus> | ZG.CatchAll;
    'zg-foot': KebabKeys<ZG.ZingGridAttributes.ZGFoot> | ZG.CatchAll;
    'zg-footer': KebabKeys<ZG.ZingGridAttributes.ZGFooter> | ZG.CatchAll;
    'zg-head': KebabKeys<ZG.ZingGridAttributes.ZGHead> | ZG.CatchAll;
    'zg-head-cell': KebabKeys<ZG.ZingGridAttributes.ZGHeadCell> | ZG.CatchAll;
    'zg-header': KebabKeys<ZG.ZingGridAttributes.ZGHeader> | ZG.CatchAll;
    'zg-icon': KebabKeys<ZG.ZingGridAttributes.ZGIcon> | ZG.CatchAll;
    'zg-input': KebabKeys<ZG.ZingGridAttributes.ZGInput> | ZG.CatchAll;
    'zg-layout-controls': KebabKeys<ZG.ZingGridAttributes.ZGLayoutControls> | ZG.CatchAll;
    'zg-load-mask': KebabKeys<ZG.ZingGridAttributes.ZGLoadMask> | ZG.CatchAll;
    'zg-menu': KebabKeys<ZG.ZingGridAttributes.ZGMenu> | ZG.CatchAll;
    'zg-menu-group': KebabKeys<ZG.ZingGridAttributes.ZGMenuGroup> | ZG.CatchAll;
    'zg-menu-item': KebabKeys<ZG.ZingGridAttributes.ZGMenuItem> | ZG.CatchAll;
    'zg-no-data': KebabKeys<ZG.ZingGridAttributes.ZGNoData> | ZG.CatchAll;
    'zg-pager': KebabKeys<ZG.ZingGridAttributes.ZGPager> | ZG.CatchAll;
    'zg-param': KebabKeys<ZG.ZingGridAttributes.ZGParam> | ZG.CatchAll;
    'zg-row': KebabKeys<ZG.ZingGridAttributes.ZGRow> | ZG.CatchAll;
    'zg-search': KebabKeys<ZG.ZingGridAttributes.ZGSearch> | ZG.CatchAll;
    'zg-selector-mask': KebabKeys<ZG.ZingGridAttributes.ZGSelectorMask> | ZG.CatchAll;
    'zg-separator': KebabKeys<ZG.ZingGridAttributes.ZGSeparator> | ZG.CatchAll;
    'zg-source': KebabKeys<ZG.ZingGridAttributes.ZGSource> | ZG.CatchAll;
    'zg-status': KebabKeys<ZG.ZingGridAttributes.ZGStatus> | ZG.CatchAll;
    'zg-text': KebabKeys<ZG.ZingGridAttributes.ZGText> | ZG.CatchAll;
    'zg-tooltip': KebabKeys<ZG.ZingGridAttributes.ZGTooltip> | ZG.CatchAll;
    'zing-grid': KebabKeys<ZG.ZingGridAttributes.ZingGrid> | ZG.ZingGridEventHandlers | ZG.CatchAll;
  }
}


declare namespace ZingGrid {
  /**
   * @description Customizes the user's dialog for all instances of ZingGrid
   * @param type The type of dialog to customize.  If you set as null, the config will be applied to all dialogs.
   * Options are:
   * <ul>
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
   * @param locale The locale to use for the formatting.  Optional.
   */
  function formatDate(date: string | Date, format: string, locale?: string): string;

  /**
   * @description Formats a Date in from now format
   * @param date The Date to format
   * @param raw Indicates if we should include 'ago/to' to indicate past/future
   */
  function fromNow(date: Date, raw: boolean): string;

  /**
   * @description Register a method to make connecting a remote data src to your grid even easier. If you
   * have your own standardized endpoints this is very useful. A way for us to provide an ES6 style import
   *  mechanism and pattern for building custom data sources.
   * @param sType The string name for the adapter
   * @param oOptions Option list of of adapter variables you want to define. You can define ANY
   * zg-param name value pair here in this option. Refer to the Store.js variable this.oDefaultDataFormat
   */
  function registerAdapter(sType: string, oOptions: any): void;

  /**
   * @description Register a custom column type to reduce redundant markup and re-use 
   * similar code.
   * @param sType Name of cell type.
   * @param oOptions An object to define the renderer and/or editor for the cell type.
   */
  function registerCellType(sType: string, oOptions: any): void;

  /**
   * @description Register the life cycle hooks for cell editing. This allows you to import
   * and inherit editors for your library.
   * @param sCellType Cell type editor to override
   * @param oConfig Object containing editor hooks
   */
  function registerEditor(sCellType: string, oConfig: any): void;

  /**
   * @description Register a method to make it available to ZingGrid even if it outside the window scope.  
   * This can be used to make a method accessible to renderer, editor, sorter, and custom styles
   * This is useful for methods within a class or local methods.
   * @param method The method that you wish to expose to ZingGrid.
   * @param name The name to refer to the method.  If the method is not anonymous, the name will default to the
   * name of the method.  If it is anonymous, a name must be set.  Whatever is set here is how you should refer to the method
   * in the grid. Optional.
   * @param scope The scope of the method.  When the method is called `this` will be set to the `scope` value. Optional.
   */
  function registerMethod(method: ZingGridFunction, name?: string, scope?: any): void;

  /**
   * @description Register a namespace to make it available to ZingGrid even if it outside the window scope.  
   * Once a namespace is registered, the methods within the namespace will be accessible to ZingGrid without having to call `ZingGrid.registerMethod`
   * @param namespace The namespace that you wish to expose to ZingGrid.
   * @param name The name to refer to the namespace. Optional.
   * @param scope The scope of the namespace.  When a method within the namespace is called, `this` will be set to the `scope` value.
   * Defaults to the namespace itself. Optional.
   */
  function registerNamespace(namespace: any, name?: string, scope?: any): void;

  /**
   * @description Register the life cycle hooks for cell validation. This allows you to import
   * and inherit validators for your library.
   * @param oValidator The validator that you wish to expose to ZingGrid.
   * @param name The name to refer to the validator. Optional.
   * @param scope The scope of the method.  When the method is called `this` will be set to the `scope` value. Optional.
   */
  function registerValidator(oValidator: any, name?: string, scope?: any): void;

}

declare class ZingGrid extends ZG.ZingGrid {};
