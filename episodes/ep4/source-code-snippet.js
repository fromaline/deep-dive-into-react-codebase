function isValidContainer(node) {
    return !!(node && 
      (node.nodeType === ELEMENT_NODE 
        || node.nodeType === DOCUMENT_NODE 
        || node.nodeType === DOCUMENT_FRAGMENT_NODE 
        // If you want to know how to use react-mount-point-unstable, check out my twitter thread
        // https://twitter.com/fromaline/status/1487059240468590596  
        || node.nodeType === COMMENT_NODE && node.nodeValue === ' react-mount-point-unstable ')
    );
}

function isContainerMarkedAsRoot(node) {
  // internalContainerInstanceKey equals to __reactContainer + generated unique hash
  return !!node[internalContainerInstanceKey];
}

function render(element, container, callback) {
  if (!isValidContainer(container)) {
    {
      throw Error( "Target container is not a DOM element." );
    }
  }

  {
    var isModernRoot = isContainerMarkedAsRoot(container) && container._reactRootContainer === undefined;

    if (isModernRoot) {
      error('You are calling ReactDOM.render() on a container that was previously ' + 'passed to ReactDOM.createRoot(). This is not supported. ' + 'Did you mean to call root.render(element)?');
    }
  }

  return legacyRenderSubtreeIntoContainer(null, element, container, false, callback);
}