const requireAll = (requireContext) => {
  return requireContext.keys().map(requireContext);
}

requireAll(require.context('./helpers/', true, /\.js$/));
requireAll(require.context('./unit', true, /.*?(\.spec).js$/));
