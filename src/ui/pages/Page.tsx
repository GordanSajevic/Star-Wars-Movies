import * as React from "react";

export interface PageProps {
  children?: any;
  title?: string;
}

export interface PageState {}

class Page extends React.Component<PageProps, PageState> {
  render() {
    const { children, title } = this.props;
    return (
        <div className="main">
            <h3>{title}</h3>
            {children}
      </div>
    );
  }
}

export default Page;