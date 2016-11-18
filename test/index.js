const requireAll = (requireContext) => {
  return requireContext.keys().map(requireContext);
};

requireAll(require.context('./unit', true, /.*?(\.spec).js$/));
