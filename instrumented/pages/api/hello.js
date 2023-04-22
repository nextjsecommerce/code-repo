function cov_2305nygib() {
  var path = "C:\\macaronmagic\\src\\pages\\api\\hello.js";
  var hash = "9db0c357e1a3e45a3d5446ba9b3de9b77a33568e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\macaronmagic\\src\\pages\\api\\hello.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 4,
          column: 44
        }
      }
    },
    fnMap: {
      "0": {
        name: "handler",
        decl: {
          start: {
            line: 3,
            column: 24
          },
          end: {
            line: 3,
            column: 31
          }
        },
        loc: {
          start: {
            line: 3,
            column: 42
          },
          end: {
            line: 5,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "9db0c357e1a3e45a3d5446ba9b3de9b77a33568e"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2305nygib = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2305nygib();
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  cov_2305nygib().f[0]++;
  cov_2305nygib().s[0]++;
  res.status(200).json({
    name: 'John Doe'
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMjMwNW55Z2liIiwiYWN0dWFsQ292ZXJhZ2UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZiIsInMiLCJzdGF0dXMiLCJqc29uIiwibmFtZSJdLCJzb3VyY2VzIjpbImhlbGxvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBuYW1lOiAnSm9obiBEb2UnIH0pXG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQUEsYUFBQSxZQUFBQSxDQUFBO01BQUEsT0FBQUMsY0FBQTtJQUFBO0VBQUE7RUFBQSxPQUFBQSxjQUFBO0FBQUE7QUFBQUQsYUFBQTtBQWZaOztBQUVBLGVBQWUsU0FBU0UsT0FBT0EsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7RUFBQUosYUFBQSxHQUFBSyxDQUFBO0VBQUFMLGFBQUEsR0FBQU0sQ0FBQTtFQUN4Q0YsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztJQUFFQyxJQUFJLEVBQUU7RUFBVyxDQUFDLENBQUM7QUFDNUMifQ==