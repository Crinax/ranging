const parser = (text) => {
  const parts = text.split('should return');
  const fullParts = [...parts[0].match(/^#\d+/), parts[0].split(/^#\d+/)[1], parts[1]];
  return {
    num: fullParts[0],
    code: fullParts[1],
    except: fullParts[2],
  };
};

module.exports = parser;
