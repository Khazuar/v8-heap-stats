
// See https://material.google.com/style/color.html#color-color-palette
const Colors = {
  // Deep Purple
  "*FIXED_ARRAY_TYPE_FEEDBACK_VECTOR_SUB_TYPE": "#673AB7",
  "*FIXED_ARRAY_LITERALS_ARRAY_SUB_TYPE": "#B39DDB",
  "*FIXED_ARRAY_TYPE_FEEDBACK_METADATA_SUB_TYPE": "#7E57C2",

  // Teal
  "*FIXED_ARRAY_FAST_ELEMENTS_SUB_TYPE": "#B2DFDB",
  "*FIXED_ARRAY_FAST_PROPERTIES_SUB_TYPE": "#4DB6AC",
  "*FIXED_ARRAY_DICTIONARY_ELEMENTS_SUB_TYPE": "#009688",
  "*FIXED_ARRAY_DICTIONARY_PROPERTIES_SUB_TYPE": "#00796B",

  // Light Green
  "*FIXED_ARRAY_ENUM_CACHE_SUB_TYPE": "#AED581",
  "*FIXED_ARRAY_ENUM_INDICES_CACHE_SUB_TYPE": "#8BC34A",
  "*FIXED_ARRAY_MAP_CODE_CACHE_SUB_TYPE": "#7CB342",
  "*FIXED_ARRAY_DEPENDENT_CODE_SUB_TYPE": "#DCEDC8",

  // Orange
  "*FIXED_ARRAY_STRING_TABLE_SUB_TYPE": "#FF9800",
  "*FIXED_ARRAY_SERIALIZED_TEMPLATES_SUB_TYPE": "#FFE0B2",
  "*FIXED_ARRAY_NUMBER_STRING_CACHE_SUB_TYPE": "#FFB74D",
  "*FIXED_ARRAY_CODE_STUBS_TABLE_SUB_TYPE": "#F57C00",
  "*FIXED_ARRAY_WEAK_NEW_SPACE_OBJECT_TO_CODE_SUB_TYPE": "#FB8C00",
  "*FIXED_ARRAY_INTRINSIC_FUNCTION_NAMES_SUB_TYPE": "#EF6C00",

  // Brown
  "*FIXED_ARRAY_DEOPTIMIZATION_DATA_SUB_TYPE": "#795548",
  "*FIXED_ARRAY_HANDLER_TABLE_SUB_TYPE": "#A1887F",

  // Red
  "*FIXED_ARRAY_SCOPE_INFO_SUB_TYPE": "#F44336",
  "*FIXED_ARRAY_EMBEDDED_OBJECT_SUB_TYPE": "#E57373",

  // Blue
  "*FIXED_ARRAY_CONTEXT_SUB_TYPE": "#2196F3",
  "*FIXED_ARRAY_DESCRIPTOR_ARRAY_SUB_TYPE": "#64B5F6",
  "*FIXED_ARRAY_COPY_ON_WRITE_SUB_TYPE": "#BBDEFB",
  "*FIXED_ARRAY_TEMPLATE_INSTANTIATIONS_CACHE_SUB_TYPE": "#90CAF9",

  // Green
  "*FIXED_ARRAY_SHARED_FUNCTION_INFOS_SUB_TYPE": "#4CAF50",
  "*FIXED_ARRAY_OPTIMIZED_CODE_MAP_SUB_TYPE": "#81C784",

  // Yellow
  "*FIXED_ARRAY_BYTECODE_ARRAY_HANDLER_TABLE_SUB_TYPE": "#FFF176",
  "*FIXED_ARRAY_BYTECODE_ARRAY_CONSTANT_POOL_SUB_TYPE": "#FFEB3B",

  getColor(name) {
    if (name in this) return this[name];
    return "#999999";
  }
};

const InstanceTypeGroups = {
  Rest: [
    "CELL_TYPE",
    "PROTOTYPE_INFO_TYPE",
    "SYMBOL_TYPE",
    "ODDBALL_TYPE",
    "MUTABLE_HEAP_NUMBER_TYPE",
    "ACCESS_CHECK_INFO_TYPE",
    "OBJECT_TEMPLATE_INFO_TYPE",
    "FUNCTION_TEMPLATE_INFO_TYPE",
    "INTERCEPTOR_INFO_TYPE",
    "CALL_HANDLER_INFO_TYPE",
    "FOREIGN_TYPE",
    "ALLOCATION_MEMENTO_TYPE",
    "TRANSITION_ARRAY_TYPE",
    "PROPERTY_CELL_TYPE",
    "HEAP_NUMBER_TYPE",
    "SCRIPT_TYPE",
    "ALLOCATION_SITE_TYPE",
    "TYPE_FEEDBACK_INFO_TYPE",
    "FIXED_INT8_ARRAY_TYPE",
    "FIXED_UINT8_ARRAY_TYPE",
    "FIXED_UINT8_CLAMPED_ARRAY_TYPE",
    "FIXED_INT16_ARRAY_TYPE",
    "FIXED_UINT16_ARRAY_TYPE",
    "FIXED_INT32_ARRAY_TYPE",
    "FIXED_UINT32_ARRAY_TYPE",
    "FIXED_FLOAT32_ARRAY_TYPE",
    "FIXED_FLOAT64_ARRAY_TYPE",
    "FIXED_DOUBLE_ARRAY_TYPE"
  ],
  Strings: [
    "ACCESSOR_INFO_TYPE",
    "ACCESSOR_PAIR_TYPE",
    "CONS_ONE_BYTE_STRING_TYPE",
    "CONS_STRING_TYPE",
    "EXTERNAL_ONE_BYTE_INTERNALIZED_STRING_TYPE",
    "EXTERNAL_ONE_BYTE_STRING_TYPE",
    "EXTERNAL_INTERNALIZED_STRING_TYPE",
    "EXTERNAL_STRING_TYPE",
    "INTERNALIZED_STRING_TYPE",
    "ONE_BYTE_INTERNALIZED_STRING_TYPE",
    "ONE_BYTE_STRING_TYPE",
    "SHORT_EXTERNAL_INTERNALIZED_STRING_TYPE",
    "SHORT_EXTERNAL_ONE_BYTE_STRING_TYPE",
    "SHORT_EXTERNAL_ONE_BYTE_INTERNALIZED_STRING_TYPE",
    "SHORT_EXTERNAL_STRING_TYPE",
    "SLICED_ONE_BYTE_STRING_TYPE",
    "SLICED_STRING_TYPE",
    "STRING_TYPE"
  ],
  JSSpecialObjects: [
    "JS_API_OBJECT_TYPE",
    "JS_ARGUMENTS_TYPE",
    "JS_ARRAY_BUFFER_TYPE",
    "JS_ARRAY_TYPE",
    "JS_BOUND_FUNCTION_TYPE",
    "JS_ERROR_TYPE",
    "JS_DATE_TYPE",
    "JS_FUNCTION_TYPE",
    "JS_GLOBAL_OBJECT_TYPE",
    "JS_GLOBAL_PROXY_TYPE",
    "JS_MAP_ITERATOR_TYPE",
    "JS_MAP_TYPE",
    "JS_MESSAGE_OBJECT_TYPE",
    "JS_PROMISE_TYPE",
    "JS_REGEXP_TYPE",
    "JS_SPECIAL_API_OBJECT_TYPE",
    "JS_TYPED_ARRAY_TYPE",
    "JS_VALUE_TYPE",
    "JS_WEAK_MAP_TYPE"
  ]
};

module.exports = {
  Colors: Colors,
  InstanceTypeGroups: InstanceTypeGroups
};
