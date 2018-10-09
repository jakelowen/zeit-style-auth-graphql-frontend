import React from "react";
import Loading from "../../../../components/Loading";
import GenericError from "../../../../components/GenericError";

export default class VerificationMessage extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const { submitToConnector } = this.props;
    submitToConnector();
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { loading, error, data } = this.props;
    if (loading) {
      return <Loading />;
    }

    if (error) {
      return <GenericError />;
    }

    return (
      <React.Fragment>
        <div className="measure center black-80  sans-serif">
          <h1 className="f2 line-title">
            {data && data.verify && data.verify.success ? "Horray!" : "Hold up"}
          </h1>
          <p className="f5 line-copy">
            {data && data.verify && data.verify.message}
          </p>
        </div>
      </React.Fragment>
    );
  }
}
