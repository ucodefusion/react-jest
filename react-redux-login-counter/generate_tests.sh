#!/bin/bash

# Define component names
components=("Login" "Post")

# Loop through the component names to create files
for component in "${components[@]}"; do
  # Create the component file
  cat > "src/components/${component}.js" <<EOF
import React from 'react';

const $component = () => {
  return <div>$component component</div>;
};

export default $component;
EOF

  # Create the test file
  cat > "src/components/${component}.test.js" <<EOF
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import $component from './$component';

describe('${component} Component', () => {
  test('renders correctly', () => {
    render(<$component />);
    expect(screen.getByText('${component} component')).toBeInTheDocument();
  });
});
EOF
done

echo "Component and test files generated."
