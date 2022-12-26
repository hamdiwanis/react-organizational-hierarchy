import * as React from 'react';
import css from './TreeNode.module.css';
import type { ReactNode } from 'react';
console.log(css);
export interface TreeNodeProps {
  /**
   * The node label
   * */
  label: React.ReactNode;
  className?: string;
  children?: ReactNode;
}

function TreeNode({ children, label, className }: TreeNodeProps) {
  return (
    <li className={`${css.node} ${css.nodeLines} ${className}`}>
      {label}
      {React.Children.count(children) > 0 && (
        <ul className={css.childrenContainer}>{children}</ul>
      )}
    </li>
  );
}

export default TreeNode;
