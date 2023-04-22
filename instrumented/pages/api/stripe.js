function cov_2ihgtapxjr() {
  var path = "C:\\macaronmagic\\src\\pages\\api\\stripe.js";
  var hash = "e5aef93ba84700239b8537fa80db308da2595a61";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\macaronmagic\\src\\pages\\api\\stripe.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 15
        },
        end: {
          line: 3,
          column: 68
        }
      },
      "1": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 54,
          column: 3
        }
      },
      "2": {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 50,
          column: 5
        }
      },
      "3": {
        start: {
          line: 8,
          column: 21
        },
        end: {
          line: 42,
          column: 7
        }
      },
      "4": {
        start: {
          line: 19,
          column: 22
        },
        end: {
          line: 19,
          column: 46
        }
      },
      "5": {
        start: {
          line: 20,
          column: 27
        },
        end: {
          line: 22,
          column: 38
        }
      },
      "6": {
        start: {
          line: 24,
          column: 10
        },
        end: {
          line: 38,
          column: 12
        }
      },
      "7": {
        start: {
          line: 45,
          column: 22
        },
        end: {
          line: 45,
          column: 67
        }
      },
      "8": {
        start: {
          line: 47,
          column: 6
        },
        end: {
          line: 47,
          column: 36
        }
      },
      "9": {
        start: {
          line: 49,
          column: 6
        },
        end: {
          line: 49,
          column: 58
        }
      },
      "10": {
        start: {
          line: 52,
          column: 4
        },
        end: {
          line: 52,
          column: 35
        }
      },
      "11": {
        start: {
          line: 53,
          column: 4
        },
        end: {
          line: 53,
          column: 46
        }
      }
    },
    fnMap: {
      "0": {
        name: "handler",
        decl: {
          start: {
            line: 5,
            column: 30
          },
          end: {
            line: 5,
            column: 37
          }
        },
        loc: {
          start: {
            line: 5,
            column: 48
          },
          end: {
            line: 55,
            column: 1
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 18,
            column: 33
          },
          end: {
            line: 18,
            column: 34
          }
        },
        loc: {
          start: {
            line: 18,
            column: 43
          },
          end: {
            line: 39,
            column: 9
          }
        },
        line: 18
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 6,
            column: 2
          },
          end: {
            line: 54,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 6,
            column: 2
          },
          end: {
            line: 54,
            column: 3
          }
        }, {
          start: {
            line: 6,
            column: 2
          },
          end: {
            line: 54,
            column: 3
          }
        }],
        line: 6
      },
      "1": {
        loc: {
          start: {
            line: 49,
            column: 17
          },
          end: {
            line: 49,
            column: 38
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 49,
            column: 17
          },
          end: {
            line: 49,
            column: 31
          }
        }, {
          start: {
            line: 49,
            column: 35
          },
          end: {
            line: 49,
            column: 38
          }
        }],
        line: 49
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "e5aef93ba84700239b8537fa80db308da2595a61"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2ihgtapxjr = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2ihgtapxjr();
import Stripe from "stripe";
const stripe = (cov_2ihgtapxjr().s[0]++, new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY));
export default async function handler(req, res) {
  cov_2ihgtapxjr().f[0]++;
  cov_2ihgtapxjr().s[1]++;
  if (req.method === "POST") {
    cov_2ihgtapxjr().b[0][0]++;
    cov_2ihgtapxjr().s[2]++;
    try {
      const params = (cov_2ihgtapxjr().s[3]++, {
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options: [{
          shipping_rate: "shr_1MAwLmIG1cktkZ0RP4YPwGil"
        }],
        line_items: req.body.map(item => {
          cov_2ihgtapxjr().f[1]++;
          const img = (cov_2ihgtapxjr().s[4]++, item.image[0].asset._ref);
          const newImage = (cov_2ihgtapxjr().s[5]++, img.replace("image-", "https://cdn.sanity.io/images/g6xvtbtr/").replace("-webp", ".webp"));
          cov_2ihgtapxjr().s[6]++;
          return {
            price_data: {
              currency: "gbp",
              product_data: {
                name: item.name,
                images: [newImage]
              },
              unit_amount: item.price * 100
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1
            },
            quantity: item.quantity
          };
        }),
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/canceled`
      });

      // Create Checkout Sessions from body params.
      const session = (cov_2ihgtapxjr().s[7]++, await stripe.checkout.sessions.create(params));
      cov_2ihgtapxjr().s[8]++;
      res.status(200).json(session);
    } catch (err) {
      cov_2ihgtapxjr().s[9]++;
      res.status((cov_2ihgtapxjr().b[1][0]++, err.statusCode) || (cov_2ihgtapxjr().b[1][1]++, 500)).json(err.message);
    }
  } else {
    cov_2ihgtapxjr().b[0][1]++;
    cov_2ihgtapxjr().s[10]++;
    res.setHeader("Allow", "POST");
    cov_2ihgtapxjr().s[11]++;
    res.status(405).end("Method Not Allowed");
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMmloZ3RhcHhqciIsImFjdHVhbENvdmVyYWdlIiwiU3RyaXBlIiwic3RyaXBlIiwicyIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVFJJUEVfU0VDUkVUX0tFWSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJmIiwibWV0aG9kIiwiYiIsInBhcmFtcyIsInN1Ym1pdF90eXBlIiwibW9kZSIsInBheW1lbnRfbWV0aG9kX3R5cGVzIiwiYmlsbGluZ19hZGRyZXNzX2NvbGxlY3Rpb24iLCJzaGlwcGluZ19vcHRpb25zIiwic2hpcHBpbmdfcmF0ZSIsImxpbmVfaXRlbXMiLCJib2R5IiwibWFwIiwiaXRlbSIsImltZyIsImltYWdlIiwiYXNzZXQiLCJfcmVmIiwibmV3SW1hZ2UiLCJyZXBsYWNlIiwicHJpY2VfZGF0YSIsImN1cnJlbmN5IiwicHJvZHVjdF9kYXRhIiwibmFtZSIsImltYWdlcyIsInVuaXRfYW1vdW50IiwicHJpY2UiLCJhZGp1c3RhYmxlX3F1YW50aXR5IiwiZW5hYmxlZCIsIm1pbmltdW0iLCJxdWFudGl0eSIsInN1Y2Nlc3NfdXJsIiwiaGVhZGVycyIsIm9yaWdpbiIsImNhbmNlbF91cmwiLCJzZXNzaW9uIiwiY2hlY2tvdXQiLCJzZXNzaW9ucyIsImNyZWF0ZSIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJzdGF0dXNDb2RlIiwibWVzc2FnZSIsInNldEhlYWRlciIsImVuZCJdLCJzb3VyY2VzIjpbInN0cmlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RyaXBlIGZyb20gXCJzdHJpcGVcIjtcclxuXHJcbmNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSSVBFX1NFQ1JFVF9LRVkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcGFyYW1zID0ge1xyXG4gICAgICAgIHN1Ym1pdF90eXBlOiBcInBheVwiLFxyXG4gICAgICAgIG1vZGU6IFwicGF5bWVudFwiLFxyXG4gICAgICAgIHBheW1lbnRfbWV0aG9kX3R5cGVzOiBbXCJjYXJkXCJdLFxyXG4gICAgICAgIGJpbGxpbmdfYWRkcmVzc19jb2xsZWN0aW9uOiBcImF1dG9cIixcclxuICAgICAgICBzaGlwcGluZ19vcHRpb25zOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNoaXBwaW5nX3JhdGU6IFwic2hyXzFNQXdMbUlHMWNrdGtaMFJQNFlQd0dpbFwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGxpbmVfaXRlbXM6IHJlcS5ib2R5Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaW1nID0gaXRlbS5pbWFnZVswXS5hc3NldC5fcmVmO1xyXG4gICAgICAgICAgY29uc3QgbmV3SW1hZ2UgPSBpbWdcclxuICAgICAgICAgICAgLnJlcGxhY2UoXCJpbWFnZS1cIiwgXCJodHRwczovL2Nkbi5zYW5pdHkuaW8vaW1hZ2VzL2c2eHZ0YnRyL1wiKVxyXG4gICAgICAgICAgICAucmVwbGFjZShcIi13ZWJwXCIsIFwiLndlYnBcIik7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJpY2VfZGF0YToge1xyXG4gICAgICAgICAgICAgIGN1cnJlbmN5OiBcImdicFwiLFxyXG4gICAgICAgICAgICAgIHByb2R1Y3RfZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VzOiBbbmV3SW1hZ2VdLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgdW5pdF9hbW91bnQ6IGl0ZW0ucHJpY2UgKiAxMDAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFkanVzdGFibGVfcXVhbnRpdHk6IHtcclxuICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIG1pbmltdW06IDEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHF1YW50aXR5OiBpdGVtLnF1YW50aXR5LFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9KSxcclxuICAgICAgICBzdWNjZXNzX3VybDogYCR7cmVxLmhlYWRlcnMub3JpZ2lufS9zdWNjZXNzYCxcclxuICAgICAgICBjYW5jZWxfdXJsOiBgJHtyZXEuaGVhZGVycy5vcmlnaW59L2NhbmNlbGVkYCxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vIENyZWF0ZSBDaGVja291dCBTZXNzaW9ucyBmcm9tIGJvZHkgcGFyYW1zLlxyXG4gICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RyaXBlLmNoZWNrb3V0LnNlc3Npb25zLmNyZWF0ZShwYXJhbXMpO1xyXG5cclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oc2Vzc2lvbik7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgcmVzLnN0YXR1cyhlcnIuc3RhdHVzQ29kZSB8fCA1MDApLmpzb24oZXJyLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc2V0SGVhZGVyKFwiQWxsb3dcIiwgXCJQT1NUXCIpO1xyXG4gICAgcmVzLnN0YXR1cyg0MDUpLmVuZChcIk1ldGhvZCBOb3QgQWxsb3dlZFwiKTtcclxuICB9XHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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