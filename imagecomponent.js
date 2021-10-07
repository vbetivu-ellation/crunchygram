interface OuterProps {
    src: string;
  }
  const LoadedState = StateProvider(false);
  const ImageWithLoading = ({ src }) => (
    <LoadedState>
      {({ state: loaded, setState: setLoaded }) => (
        <div>
          {!loaded ? (
            <svg width="100" height="100" viewBox="0 0 100 100">  
              <rect width="100" height="100" rx="10" ry="10" fill="#CCC" />
            </svg>
          ) : null}
          <img
            src={src}
            style={!loaded ? { visibility: 'hidden' } : {}}
            onLoad={() => setLoaded(true)}
          />
        </div>
      )}
    </LoadedState>
  );